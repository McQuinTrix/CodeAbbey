var a = input();
for(var i=0;i<a;i++){
	var b = input().split(" ");
	var c = parseInt(b[0]/(b[1]*b[1]));
	if(c >29 ){output("obese")}
	else if (c>=25 && c<30){output("over")}
	else if (c>=18.5 && c<25){output("normal")}
	else{output("under")}
	output(" ");
}
