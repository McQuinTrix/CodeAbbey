var a = input().split(" ");
var b = {};
var c = 0;
var d = [];

a.forEach(function(cur, ind, arr){ b[cur] = ( b[cur]+1 || 1);  });

for(var i in b){ if(b[i] > c){ c = b[i];}};

for(var j=c; j>1;j--){
	for(var k in b){ if(b[k] == j){ d.push(k);}};
}
d.sort();
output(d.join(" "));
