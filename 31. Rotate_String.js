var a = Number(input());
for(var i=0;i<a;i++){
	var inp = input().split(" ");
	var str = inp[1].split("");
	var num = Number(inp[0]);
	var aux;
	if(num > 0){
		for(var j=0;j<num;j++){
			aux = str.shift();
			str.push(aux);
		}
		output(str.join(""));
		output(" ");
	}else{
		num = Math.abs(num);
		for(var j=0;j<num;j++){
			aux = str.pop();
			str.unshift(aux);
		}
		output(str.join(""));
		output(" ");
	}
}
