var msg="IT IS PRESENT IN GLOBAL";
console.log("Message: "+msg);

function local1(){
	var msg="It is present in local";
	console.log("Local message: "+msg);
	global1();
}

function global1(){
	console.log("Message: "+msg);
}
local1();
