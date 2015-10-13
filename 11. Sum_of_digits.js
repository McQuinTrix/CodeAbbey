var a = input();
for(var i=0;i<a;i++){
	var b = input().split(" ");
	output(((Number(b[0])*Number(b[1]))+Number(b[2])).toString().split("").reduce(function(p,q){return Number(p)+Number(q)}));
	output(" ");
}
