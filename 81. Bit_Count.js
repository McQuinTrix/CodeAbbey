var a = Number(input());
var inp = input().split(" ");
for(var i=0; i<a; i++){
	var num = Number(inp[i]);
	if(num > 0){
		num = num.toString(2);
		output(num.split("").filter(function(n){return "1"==n;}).length)
		output(" ");
	}else{
		var nu = 4294967296;
		num = Math.abs(num);
		num = nu - num;
		num = num.toString(2);
		output(num.split("").filter(function(m){return "1"==m;}).length)
		output(" ");
	}
}
