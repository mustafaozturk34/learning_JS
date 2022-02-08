//----- REST ----- 
//Geriye kalan parametrelerden bir dizi oluşturur.

let showProducts = function (id, ...products) {
    console.log(id);
    console.log(products);
}

showProducts(10,"A","B","C") // 3.satırdaki çıktı 3 elemanlı bir array olur.
showProducts(10,["A","B","C"]) // 3.satırdaki çıktı 1 arrayli bir array olur.


//----- SPREAD -----
// Bir arrayi parametrelerine ayırmaya yarar.

let points = [1,2,5,11,55,120,4,15];

console.log(Math.max(...points)); // Math.max fonksiyonu parametre olarak rest ister.

console.log(..."ABC","D",..."EFG","H")


//----- DESTRUCTURING -----
//React Hooklarda en çok bu kullanılır. Destructuring elimizdeki arrayin değerlerinin değişkenlere atama yöntemidir.

let populations = [10000,20000,30000,[40000,50000]];
let [small, medium, high,[veryHigh,maximum]] = populations;//Arrayin 1.elemanından başlayarak yazdığımız değişkenlere sırayla atar.

function someFunc([value],number) { // Js'de köşeli parantezli parametre olmadığından bu satırdakini distructuring olarak algılar.
    console.log(value);
}

sumeFunc(populations);


let category =  {id: 1, name: "İçecek"}

//Distructingsiz
console.log(category.id);//Objenin propuna ulaşmanın 1.yolu
console.log(category["name"]);// Objenin propuna ulaşmanın 2.yolu

//Distructingli
//Bu yapı Redux'ta çok sık kullanılır.
let {id,name} = category; // Let tarafında süslü veya köşeli parantez var ise distructuring yapılıyodur.
console.log(id);
console.log(name);