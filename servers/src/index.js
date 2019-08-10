var http = require("http");
var url = require("url");
var fs = require("fs");
var server = http.createServer();
var newURL = require('./url.js');
//console.log(newURL);
server.on("request", function (req, res) {
    if (req.url !== "/favicon.ico") {
        var urlStr = url.parse(req.url);
        if (urlStr.pathname == "/") {
            if (urlStr.query) {
                newURL(urlStr.query);
            }
            res.writeHead(urlStr.query ? 200 : 400, {
                //plain:纯文本；html:解析
                "Content-Type": "text/html;charset=utf-8",
                "Access-Control-Allow-Origin": '*',
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Headers": "X-Requested-With",
                "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS"
            });
            res.end(JSON.stringify({
                data: null,
                success: urlStr.query ? true : false,
                status: urlStr.query ? 200 : 400,
                message: urlStr.query ? null : "参数错误！"
            }));
        }



    }
});
server.listen(3000, "127.0.0.1", function () {
    console.log("服务启动...");
});