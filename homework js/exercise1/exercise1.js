var a=prompt();
var count=0;
while (a>0) {
    a=(a-a%10)/10
    count=count+1;
}
console.log(count)