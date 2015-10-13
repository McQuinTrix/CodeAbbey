var a = input().split(" ");
var b = input().split(" ");
var c = new Array();
for(var i=0; i<a[0];i++){
	c[b[i]-1] = ( c[b[i]-1] || 0)+1;
}
output(c.join(" "));
