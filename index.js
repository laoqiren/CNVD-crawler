const superagent = require('superagent');
const cheerio = require('cheerio');
const async = require('async');
const urls = require('./config').urls;
const parallel = require('./config').parallel;
const Nightmare = require('nightmare');
const chunk = require('lodash/chunk');

const ICS = require('./model/ics');

const startTime = Date.now();

// 获取漏洞列表总页数
function getSumPage(){
    return superagent
    .get(urls.ics)
    .then(res=>{
        let $ = cheerio.load(res.text);
        let sumPage = $('a.step').last().text();
        return sumPage;
    });
}

// 获取每一页所有item的链接
function fetchUrl(url){
    return superagent
    .get(url)
    .then(res=>{
        let $ = cheerio.load(res.text);
        let itemtrs = $('#tr tr');
        let urls = itemtrs.map((idx,tr)=>{
            let $a = $(tr).children('td').first().find('a').first();

            return $a.attr('href')
        })
        return urls
    })
}

// 获取每个漏洞的具体信息
function fetchDetails(urls){
    
    return new Promise((resolve,reject)=>{
        async.mapLimit(urls,parallel.items,(url,cb)=>{
            
            console.log(`正在爬取${url}...`)
            let nightmare = new Nightmare();

            nightmare
            .goto(url)
            .wait('#showDiv')
            .evaluate(()=>{
                return document.querySelector('html').innerHTML
            })
            .end((res)=>{
                let $ = cheerio.load(res);
                let title = $('div.Main .blkContainerSblk h1').first().text();

                let trs = $('table.gg_detail tr');

                let infos = {title};
                for(let i=0; i<trs.length-1;i++){
                    infos[$(trs[i]).children('td').first().text()] = $(trs[i]).children('td').last().text()
                }

                ICS.insertMany(infos).catch(err=>{console.error(err)});
                cb(null,infos)
            })
            
            
        },(err,results)=>{
            if(err) {
                console.log(err)
                return reject(err)
            }
            return resolve(results);
        })
    })

}

async function fetchByPages(url,cb){
    let urls = await fetchUrl(url);

    let results = await fetchDetails(urls);

    let passTime = Date.now() - startTime;
    console.log(`成功爬取一页... ...，已经花费了:${passTime/1000}秒`);
    cb(null,results);
}

(async function main(){
    try {
        let sumPage = await getSumPage();
        let pageUrls = [];
        for(let i=0; i<sumPage; i++){
            pageUrls.push(`${urls.ics}?max=20&offset=${i*20}`);
        }

        async.mapLimit(pageUrls,parallel.pages,(url,cb)=>{
            fetchByPages(url,cb);
        },(err,results)=>{
            if(err) console.error(err);
            console.log('!!!!!!!!!!!!!!!!全部完成!!!!!!')
        })
    } catch(err){
        return console.error(err);
    }
    
})();