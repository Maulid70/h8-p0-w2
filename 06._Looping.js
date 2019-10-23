// 1. Melakukan Looping Menggunakan While

// # Looping Pertama
console.log('1. Melakukan Looping Menggunakan While');
console.log('');
console.log('LOOPING PERTAMA');
var i = 2;
while (i <= 20) {
    if( i % 2 === 0) {
        console.log(`${i} - I love Coding`);
    }
    i++;
}

console.log('');
console.log('');


// # Looping Kedua
console.log('LOOPING KEDUA');
var j = 20;
while (j >= 2) {
    if (j % 2 === 0) {
        console.log(`${j} - I will become fullstack developer`);
    }
    j--;
}
console.log('');
console.log('');


// 2. Melakukan Looping Menggunakan for
console.log('2. Melakukan Looping Menggunakan for');
console.log('');
console.log('LOOPING PERTAMA');
// Looping ke 1
for (var k = 1; k <= 20; k++) {
        console.log(`${k} - I Love Coding`);
}
console.log('');
console.log('LOOPING KEDUA');
for (var l = 20; l > 0; l--) {
    console.log(`${l} - I will become fullstack developer`);
}
console.log('');
console.log('');


// 3. Angka Ganjil dan Genap
console.log('3. Angka Ganjil dan Genap');
console.log('');
for (var m = 1; m <= 100; m++ ){
    if(m % 2 === 0){
    console.log(`${m} adalah Bilangan Genap`);
    }
    else if( m % 2 !== 0){
        console.log(`${m} adalah Bilangan Ganjil`);
        
    }
    
}
console.log('');
console.log('');

// kelipatan 3 dengan pertambahan 2
console.log('#Kelipatan 3 dengan Pertambahan 2');
console.log('');
for (var n = 1; n <= 100; n = n+2){
    if(n % 3 === 0){
        console.log(`${n} adalah kelipatan 3`);
        
    }
}


console.log('');
console.log('');

// kelipatan 6 dengan pertambahan 5
console.log('#Kelipatan 6 dengan Pertambahan 5');
console.log('');
for (var o = 1; o <= 100; o = o + 5) {
    if (o % 6 === 0) {
        console.log(`${o} adalah kelipatan 6`);

    }
}

console.log('');
console.log('');

// kelipatan 10 dengan pertambahan 9
console.log('#Kelipatan 10 dengan Pertambahan 9');
console.log('');
for (var p = 1; p <= 100; p = p + 9) {
    if (p % 10 === 0) {
        console.log(`${p} adalah kelipatan 10`);

    }
}