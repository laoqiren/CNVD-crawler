# CNVD-crawler

爬取[http://www.cnvd.org.cn](http://www.cnvd.org.cn)网站`工控系统漏洞`信息。

## 分析

通过抓包，分析出CNVD的反爬虫机制：

* 首次访问，user-agent请求无cookie,CNVD会返回521错误，并在设置了cookie值:`__jsluid`,并返回了一个脚本，，这个脚本便是项目目录`script.js`，再分析其代码，其动态构建了代码，即项目目录里的`setCookie.js`，这段代码根据已有的cookie,动态生成新的cookie,而且还设置了定时器，重新访问。这次带上了正确的cookie，正确获取到内容。

* 一次尝试：既然要得到正确cooke,那么试试爬虫直接设置cookie，但是没那么简单，爬了几次以后，就会发现返回content为空。此种情况，两种可能原因：一段时间内限制IP访问次数，或者限制对应的cookie访问次数。

* 上一步骤中，分析发现，爬虫设置的`cookie`和`user-agent`头必须匹配，而且IP要和获取时匹配，这也是其防爬手段之一。

* 再次进入分析，多次刷新页面，会发现很快会返回content为空。删除Cookie，重新访问即可回到第一步，正常得到内容。因此，可以得出结论：CNVD对同一Cookie，在一段时间内的访问次数做了限制。

* 解决方案：既然cookie访问次数有限制，那么我们可以每次爬取都进入第一步，即不带cookie，但是这种情况需要模拟browser行为，接受cookie,执行动态脚本，生成完整cookie，再次访问。

* 不用慌，既然IP访问次数都没限制，那么所有问题都不是问题，要模拟browser行为，有许多现成工具，如`phantomjs`、`nightmare`。有趣的是，我们在CNVD的动态脚本代码`setCookie.js`中，发现了这么一句：
```js
while (window._phantom || window.__phantomas) {};
```
这是在防`phantomjs`的节奏啊...具体`phantom`的情况我没测试，我用的`nightmare`~

## 其他

* 并发控制，注意控制并发数量，避免因并发过高而受限
* `script.js`和`setCookie.js`仅用于分析，无需依赖
* 代码实际上完全可以复用来爬取除了工控系统漏洞外其他漏洞信息，仅需简单修改`URL(confg.urls)`信息。

## 使用

* 安装依赖
```
npm install
```

* 启动Mongod,并配置配置文件(数据库相关，爬取URL,并发数控制)
```
vim config.js
```

* 开始爬取
```
npm run start
```