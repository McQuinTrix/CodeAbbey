var a = Number(input());
for(var i=0; i<a;i++){
	var b = input().split(" ");
	b = b.map(function(n){return Number(n);});
	var x1 = b[0], y1 = b[1],x2 = b[2],y2 = b[3],x3 = b[4],y3 = b[5];
	var up = x1*(y2-y3)+x2*(y3-y1)+x3*(y1-y2);
	var A = Math.abs(up/2);
	output(A);
	output(" ");
}
