exports.urls = {
    ics: 'http://ics.cnvd.org.cn/'
}

// 配置 database
exports.database = {
    host: 'localhost',
    db: 'icstest',
    user: 'ics',
    port: 27017,
    pwd: 'mygod'
}

// 控制并发
exports.parallel = {
    pages: 5,
    items: 5
}