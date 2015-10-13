var p = input();
for(var i=0;i<p;i++){
	var q = input().split(" ");
	var a = Number(q[0]);
	var b = Number(q[1]);
	var n = Number(q[2]);
	var d =0;
	for(var j=0; j<n; j++){
		 d = (d || 0) + a + (b*j);
	}
	output(d);
	output(" ");
}
