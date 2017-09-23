// 通过 ./script.js构造的动态代码，根据已有cookie，动态生成新cookie

var l = function () {
    while (window._phantom || window.__phantomas) {};
    var cd, dc = '__jsl_clearance=1506047478.772|0|';
    var f = [function (x) {
        return x
    }, function (x) {
        return x;
    }, (function () {
        var h = document.createElement('div');
        h.innerHTML = '<a href=\'/\'>x</a>';
        h = h.firstChild.href;
        var r = h.match(/https?:\/\//)[0];
        h = h.substr(r.length).toLowerCase();
        return function (x) {
            for (var i = 0; i < x.length; i++) {
                x[i] = h.charAt(x[i])
            };
            return x.join('')
        }
    })(), function (x) {
        for (var i = 0; i < x.length; i++) {
            x[i] = parseInt(x[i]).toString(36)
        };
        return x.join('')
    }];
    cd = ['%2F', ({} + [] + []).charAt(-~{} - ~{} + 6), [((+!~~[]) + [![],
            []
        ][-~{}]) + ((+!~~[]) + [![],
            []
        ][-~{}])],
        [((-~{} << -~{}) + [
            []
        ][~~[]]) + ((-~{} << -~{}) + [
            []
        ][~~[]])], 'SuVTSi3uh', [
            [-~[(-~{} << -~{})]] + [~~{}]
        ], 'Z', [((+!~~[]) + [![],
            []
        ][-~{}]) + ((+!~~[]) + [![],
            []
        ][-~{}])], 'Ph2', [((+!~~[]) + [![],
            []
        ][-~{}]) + [5]],
        [5], '1Tyw9c%', [-~[(-~{} << -~{})]], 'D'
    ];
    for (var i = 0; i < cd.length; i++) {
        cd[i] = f[[1, 0, 2, 3, 1, 3, 1, 3, 1, 3, 0, 1, 0, 1][i]](cd[i])
    };
    cd = cd.join('');
    dc += cd;
    setTimeout('location.href=location.href.replace(/[\?|&]captcha-challenge/,\'\')', 1500);
    document.cookie = (dc + ';Expires=Fri, 22-Sep-17 03:31:18 GMT;Path=/;');
};
if ((function () {
        try {
            return !!window.addEventListener;
        } catch (e) {
            return false;
        }
    })()) {
    document.addEventListener('DOMContentLoaded', l, false);
} else {
    document.attachEvent('onreadystatechange', l);
}