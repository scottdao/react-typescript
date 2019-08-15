// 可以使用exec 来执行系统的默认命令；child_process为内置模块 
const {
	exec
} = require("child_process");

//传入url

module.exports = function(url, callback) {
	var systemsMap = new Map([
		['darwin', `open -a "Google Chrome"  ${url}` ],
		["win32", `start chrome ${url}`],
		["linux", `google-chrome ${url}`]
	]);
	exec(systemsMap.get(process.platform), (...args) => {
		console.log(args);
		callback && callback(args);
	});

}
