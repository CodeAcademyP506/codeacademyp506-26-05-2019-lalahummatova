var a = prompt()
var factorial = function(n) {
    if(n == 0) {
        return 1;
    } else {
        var fact = 1;
        for(i = 1; i<=n; i++) {
            fact =fact*i;
        }
        return fact;
    }
}
 
console.log(factorial(a));
