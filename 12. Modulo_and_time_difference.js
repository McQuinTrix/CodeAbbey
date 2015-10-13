var a = Number(input());
for(var i=0;i<a;i++){
	var b = input().split(" ");
	var day1=(Number(b[0])*24*60*60) + (Number(b[1])*60*60)+ (Number(b[2])*60)+Number(b[3]);
	var day2=(Number(b[4])*24*60*60) + (Number(b[5])*60*60)+ (Number(b[6])*60)+Number(b[7]);
	var diff = day2-day1;
	var sec = diff%60;
	diff = (diff-sec)/60;
	var min = (diff)%60;
	diff = (diff-min)/60;
	var hou = (diff)%24;
	diff = (diff-hou)/24;
	var day = diff;
	console.log(day + " "+hou + " "+min + " " +sec );
	output("("+day + " "+hou + " "+min + " " +sec+") ");
}
