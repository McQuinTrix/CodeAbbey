var a = input();
var b = input().split(" ");
for(var i =0;i<a;i++){
	output(b[i].split("").reduce(function(a,b){return parseInt(a)+parseInt(b);}));
	output(" ");
}
