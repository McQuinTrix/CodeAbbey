var a = Number(input());
for(var i=0;i<a;i++){
	var b = input().split(" ");
	var x1 = Number(b[0]), y1 = Number(b[1]), x2 = Number(b[2]), y2=Number(b[3]);
	var y = ((y1*x2)-(y2*x1))/(x2-x1);
	var x = (y1 - y)/x1;
	output("("+x+" "+y+") ");
}
