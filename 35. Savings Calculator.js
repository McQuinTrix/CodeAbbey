var a = Number(input());
for(var i=0;i<a; i++){
    var inp = input().split(" ").map(function(val){return Number(val);});
    var e = 0;
    while(inp[0]<inp[1]){
        e++;
        inp[0] = inp[0] + ((inp[0]*inp[2])/100);
    }
    console.log(e);
}
