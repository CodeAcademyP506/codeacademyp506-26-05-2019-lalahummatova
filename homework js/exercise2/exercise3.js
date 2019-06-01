var a = [5, 4, 8, 2, 3, 7]
var max = a[0];
for (var i = 1; i < a.length; i++) {
    if (a[i] >max) {
        max = a[i];

    }
}
console.log(max);
