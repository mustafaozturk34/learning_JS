console.log("Hello World");
let points = [1,2,5,11,55,120,4,15];

console.log(Math.max(points));
console.log(..."ABC","D",..."EFG","H") // 3 nokta gelen arraydeki elemanları ayırır. çıktı: A B C D E F G H



let populations = [10000,20000,30000,[40000,50000]];
let [small, medium, high,[veryHigh,maximum]] = populations;//Arrayin 1.elemanından başlayarak yazdığımız değişkenlere sırayla atar.

function someFunc([x,...value],number) { // Js'de köşeli parantezli parametre olmadığından bu satırdakini distructuring olarak algılar.
    console.log(x);
    console.log(value);

}

someFunc(populations);