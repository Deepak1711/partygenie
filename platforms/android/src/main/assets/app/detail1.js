var view=require("ui/core/view");
var frameModule = require("ui/frame");

exports.OnSubmit=function(){
	var topmost=frameModule.topmost();
    topmost.navigate("detail2");
}

exports.OnRead=function(){
	var topmost=frameModule.topmost();
    topmost.navigate("terms");
}
