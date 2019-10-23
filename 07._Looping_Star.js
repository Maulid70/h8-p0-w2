console.log('1. MENYUSUN BARISAN BINTANG');
console.log('');
console.log('# ROWS 1');
var rows1 = 5;
for (var i = 1; i <= 5; i++) {
    console.log("*");
}

console.log('');
console.log('# ROWS 2');
var rows = 5
for(var i = 1; i <= 5; i++){
    var st = '';
    for( var j = 1; j<=5; j++ ){
        st = st + '*';
    }
    console.log(st);
}

console.log('');
console.log('# ROWS 3');
var rows = 5
for (var i = 1; i <= 5; i++) {
    var st = '';
    for (var j = 1; j <= i; j++) {
        st = st + '*';
    }
    console.log(st);
}

