// CNVD反爬虫机制： 脚本动态构建代码，动态执行


var x = "Ph2@SuVTSi3uh@cookie@772@return@div@31@Expires@_phantom@36@i@cd@href@window@captcha@18@1@__phantomas@D@while@Sep@for@1506047478@dc@__jsl_clearance@toString@parseInt@firstChild@document@17@l@replace@x@0@h@function@03@3@toLowerCase@charAt@var@2@f@22@GMT@createElement@location@r@a@Fri@setTimeout@innerHTML@1Tyw9c@challenge@length@match@2F@5@6@https@substr@join@Z@1500@Path@if@try@addEventListener@catch@e@false@DOMContentLoaded@else@attachEvent@onreadystatechange".replace(/@*$/, "").split("@"),
    y = "F v=A(){k(e.9||e.i){};F c,o='p=n.4|y|';F H=[A(x){5 x},A(x){5 x;},(A(){F z=t.K('6');z.Q='<N d=\\'/\\'>x</N>';z=z.s.d;F M=z.13(/17?:\\/\\//)[y];z=z.18(M.12).D();5 A(x){m(F b=y;b<x.12;b++){x[b]=z.E(x[b])};5 x.19('')}})(),A(x){m(F b=y;b<x.12;b++){x[b]=r(x[b]).q(a)};5 x.19('')}];c=['%14',({}+[]+[]).E(-~{}-~{}+16),[((+!~~[])+[![], []][-~{}])+((+!~~[])+[![], []][-~{}])],[((-~{}<<-~{})+[[]][~~[]])+((-~{}<<-~{})+[[]][~~[]])],'2',[[-~[(-~{}<<-~{})]]+[~~{}]],'1a',[((+!~~[])+[![], []][-~{}])+((+!~~[])+[![], []][-~{}])],'1',[((+!~~[])+[![], []][-~{}])+[15]],[15],'10%',[-~[(-~{}<<-~{})]],'j'];m(F b=y;b<c.12;b++){c[b]=H[[h,y,G,C,h,C,h,C,h,C,y,h,y,h][b]](c[b])};c=c.19('');o+=c;P('L.d=L.d.w(/[\\?|&]f-11/,\\'\\')',1b);t.3=(o+';8=O, I-l-u B:7:g J;1c=/;');};1d((A(){1e{5 !!e.1f;}1g(1h){5 1i;}})()){t.1f('1j',v,1i);}1k{t.1l('1m',v);}",
    z = 0,
    f = function (x, y) {
        var a = 0,
            b = 0,
            c = 0;
        x = x.split("");
        y = y || 99;
        while ((a = x.shift()) && (b = a.charCodeAt(0) - 77.5)) c = (Math.abs(b) < 13 ? (b + 48.5) : parseInt(a, 36)) + y * c;
        return c
    },
    g = y.match(/\b\w+\b/g).sort(function (x, y) {
        return f(x) - f(y)
    }).pop();

//return console.log()
while (f(g, ++z) - x.length) {};

return console.log(y.replace(/\b\w+\b/g, function (y) {
    //console.log(y)
    return x[f(y, z) - 1]
}))
eval(y.replace(/\b\w+\b/g, function (y) {
    return x[f(y, z) - 1]
}));
