var len = Number(input());
var arr = input().split(" ").map(function(ind){return Number(ind);});
while(arr.length != 1){
    var max=0,
        pos;
    for(var i=0;i<arr.length;i++){
        max < arr[i]? (max=arr[i], pos=i): (max=max, pos=pos);
        
    }
    console.log(max+" "+pos);
    arr.splice(pos,1,arr[arr.length-1]);
    arr.pop();
    output(pos+" ");
}
