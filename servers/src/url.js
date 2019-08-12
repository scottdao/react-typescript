// 可以使用exec 来执行系统的默认命令；child_process为内置模块 
const {
    exec
} = require("child_process");
//let open = require("open");

//console.log(exec);
//传入url
module.exports = function (url, callback) {
    console.log(process.platform);
    // 拿到当前系统的参数
    switch (process.platform) {

        //mac系统使用 一下命令打开url在浏览器
        case "darwin":
            exec(`open -a "Google Chrome"  ${url}`, (...args)=>{
				console.log(args);
				callback && callback(args);
			});

            //win系统使用 一下命令打开url在浏览器
        case "win32":
            exec(`start chrome ${url}`, (...args)=>{
				console.log(args);
				callback && callback(args);
			}));
        case "linux":
            exec(`google-chrome ${url}`, (...args)=>{
				console.log(args);
				callback && callback(args);
			}));
            // 默认mac系统
        default:
            exec(`open -a "Google Chrome"  ${url}`, (...args)=>{
				console.log(args);
				callback && callback(args);
			}));

    }
}