// function createXHR() {
//     if (typeof XMLHttpRequest !== "undefined") {
//         return new XMLHttpRequest();
//     } else if (typeof ActiveXObject !== "undefined") {
//         if (typeof arguments.callee.activeXString !== "string") {
//             var versions = [
//                 "MSXML2.XMLHttp.6.0",
//                 "MSXML2.XMLHttp.3.0",
//                 "MSXML2.XMLHttp",
//             ];
//             for (var i = 0; i < versions.length; i++) {
//                 try {
//                     new ActiveXObject(versions[i]);
//                     arguments.callee.activeXString = versions[i];
//                 } catch (error) {
//                     // 跳过
//                 }
//             }
//         }
//         return new ActiveXObject(arguments.callee.activeXString);
//     } else {
//         throw new Error("No XHR object available");
//     }
// }

var xhr = new XMLHttpRequest();

xhr.onload = function () {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr == 304) {
        console.log(xhr.getAllResponseHeaders());
    } else {
        console.log("request failed");
    }
};
xhr.onloadend = function () {
    console.log(xhr.getAllResponseHeaders());
};
xhr.onprogress = function (e) {
    console.log(e);
    const { lengthComputable, loaded, total } = e;
    if (lengthComputable) {
        console.log("已接收到:" + loaded + "字节/总:" + total + "字节");
    }
};
// xhr.open("get", "example.txt", true);
xhr.open("post", "https://juejin.cn/post/6844904164124786701", true);
// xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(null);

(function () {
    var a = 1;
    (function () {
        var a = 2;
        (function () {})();
    })();
})();
