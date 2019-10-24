// 1. TUGAS 1
console.log('1. Tugas 1');

function shoutOut(){
    return ('Hello Function');
    
}
console.log(shoutOut());
console.log();
console.log();



// 2. TUGAS 2
console.log('2. Tugas 2');

function calculateMultiply(x, y) {
    return (x * y);
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

console.log();
console.log();


//3. Tugas 3
console.log('3. Tugas 3');

function processSentence(name, age, address, hobby) {
    return (`Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`)    
} 
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);
 

