const mongoose = require('mongoose');
const db = require('./db');

const IcsSchema = new mongoose.Schema({
    title: String,
    'CNVD-ID': String,
    'CVE ID': String,
    发布时间: String,
    危害级别: String,
    影响产品: String,
    漏洞描述: String,
    参考链接: String,
    漏洞解决方案: String,
    漏洞发现者: String,
    厂商补丁: String,
    验证信息: String,
    报送时间: String,
    收录时间: String,
    漏洞附件: String
})

module.exports = db.model('ics',IcsSchema);