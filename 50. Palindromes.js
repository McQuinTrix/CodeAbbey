var a = input();
for(var i=0;i<a;i++){
	var b = input().replace(/\W/g,"").toLowerCase();
	var c = b.split("").reverse().join("");
	if(b == c){output("Y");}else{output("N");}
	output(" ");
}
