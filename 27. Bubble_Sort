var a = input();
var b = input().split(" ");
var pass = 0;
var swap = 0;
var temp = 0;
var dtetr = 0;

for(var i=0;i<a*a;i++){
	dtetr = 0;
	for(var j=1;j<a;j++){
		if(Number(b[j-1])>Number(b[j])){
			temp = b[j];
			b[j] = b[j-1];
			b[j-1] = temp;
			swap++;
			dtetr++;
		}
	}
	if(dtetr==0){
		pass++;
		break;
	}else{
		pass++;
	}
}
output(pass + " "+swap);
