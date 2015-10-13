var a = input();
var c = [];
for(var i=0; i<a; ++i){
	var b = input();
	b = b.split(" ");
	output(b.reduce(function(i,j){ if(parseInt(i)>parseInt(j)){return parseInt(j)}; return parseInt(i);}));
	output(" ");
}
