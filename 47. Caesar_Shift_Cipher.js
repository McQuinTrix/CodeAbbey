var alpha = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ");
var a = input().split(" ");

for(var i=0;i<Number(a[0]);i++){
	var sent = input();
	sent = sent.split("");
	sent = sent.map(function(k,b){ if(k==" "){
								   		return " ";
								   }else if(k=="."){
								   		return ".";
								   }else{
								   		var b = alpha.indexOf(k);
										if(b<Number(a[1])){
											b = alpha.length +(b - a[1]);
											return alpha[b];
										}else{
										
											return alpha[b-Number(a[1])];
										}
								   }});
	output(sent.join(""));
	output(" ");
}
