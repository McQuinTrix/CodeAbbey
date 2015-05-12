var inp = input().split(" ");
var fir = inp[0].split("");
var sec = Number(inp[1]);
var tri = input().split(" ");
var aux;

for(var i=0; i < sec; i++){
	aux = tri[i].split("");
	var pla = aux.filter(function(a,b){return a == fir[b];});
	var gus = aux.filter(function(a,b){return fir.indexOf(a)>=0;});
	output(pla.length+"-"+(gus.length-pla.length));
	output(" ");
}
