var a = input();

var b = input();
var c = [];

var ans = 0;

while(b){
	c.push(b);
	b = input();
}

var d = c[c.length-1].split(" ");

for(var i=0;i<c.length-1;i++){
	a = a.concat(c[i]);
	ans = eval(a);
	
	if(ans > Number(d[1])){
		ans = ans % Number(d[1]);
	}
	console.log(d);
	a = String(ans);
}
output(a);
