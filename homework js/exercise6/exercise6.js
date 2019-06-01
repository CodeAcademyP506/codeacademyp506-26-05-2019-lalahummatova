var a = [1, 2, 5, 7, 12, 9, 11, 13, 9, 8]
var max = a[0];
var secondMax = a[0]
for (var i = 0; i < a.length; i++) {
   if (a[i] > max) {
      secondMax=max
       max = a[i];
      
   }
   else if (a[i] > secondMax) {
       secondMax = a[i];
       
   }
} console.log(max);
console.log(secondMax);
console.log(max*secondMax);