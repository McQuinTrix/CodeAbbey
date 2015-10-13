var a = input();
var b = input().split(" ");
output(b.reduce(
	function(p,q){
		p = (Number(p)+Number(q))*113;
		if(p>=10000007){
			return Number(p)%10000007;
		}else{
			return Number(p);
		}
	},0));
output(" ");
