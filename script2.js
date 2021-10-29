var msg="IT IS PRESENT IN GLOBAL";


function local1(){
	var msg="It is present in local";
	console.log("Local message: "+msg);
	global1();
}

function global1(){
	console.log("Message: "+msg);
}
