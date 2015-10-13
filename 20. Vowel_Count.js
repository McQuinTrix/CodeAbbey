var num = input();
var vows = ["a","e","i","o","u","y"];
for(var i=0;i<num;i++){
	var a = input();
	output(a.split("").filter(function(a){if(vows.indexOf(a)>=0){return true;}return false;}).length);
	output(" ");
}
