var a = input();
var b = input().split(" ");
b = b.map(function(n){return Number(n);});
var c = b.slice().sort(function(a,b){if(a>b){return 1;}return -1;});

for(var i=0;i<c.length;i++){
	output(b.indexOf(c[i])+1);
	output(" ");
}
