var arr = input().split(" ");
var temp=0;
var swap=0;
arr = arr.filter(function(val,ind,ar){return ind != ar.length-1;});
arr = arr.map(function(val,ind){return Number(val);});

for(var j=1;j<arr.length;j++){
	if(arr[j-1]>arr[j]){
		temp = arr[j];
		arr[j] = arr[j-1];
		arr[j-1] = temp;
		swap++;
	}
}

output(swap+" ");

output(arr.reduce(
		function(p,q){
            p = (p+q)*113;
			if(p>=10000007){
				return p%10000007;
			}else{
				return p;
			}
		},0));
