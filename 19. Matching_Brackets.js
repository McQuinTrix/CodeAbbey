var a = Number(input());
for(var i=0;i<a;i++){
	console.log("input :" + i );
	var stack = [];
	var str = input().split("");
	var price = 0;
	for(j=0;j<str.length;j++){
		
		var ab = str[j];
		var c;
		if(ab == "("){ stack.push(")");}
		if(ab == "["){ stack.push("]");}
		if(ab == "{"){ stack.push("}");}
		if(ab == "<"){ stack.push(">");}
		
		if(ab == ")" || ab == "]" || ab == "}" || ab == ">"){ 
			c = stack.pop();
			if(c != ab){
				price++;
			}
		}
	}
	if(stack.length != 0 || price > 0){
		console.log("0");
		output("0 ");
	}else{ console.log("1"); output("1 "); }
}
