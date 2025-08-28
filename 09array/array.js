// Mendeklarasikan Array
let merklaptop = [];
merklaptop = ["Asus", "Acer", "Lenovo"];

console.log(merklaptop); // hasil : ["Asus", "Acer", "Lenovo"]

// Atau

let nama = ["Adi", "Bambang", "Cindy"];
console.log(nama); // hasil : ["Adi", "Bambang", "Cindy"]

// Array bertipe data objek
console.log(typeof nama); // hasil : object

// Array adalah tipe data objek yang memiliki indeks
console.log(nama[0]); // hasil : Adi
console.log(nama[1]); // hasil : Bambang
console.log(nama[2]); // hasil : Cindy

// Array memiliki panjang (length)
console.log(nama.length); // hasil : 3 (method array .length)

// Array adalah objek yang mempunyai function / fungsi di dalamnya.
// Function / fungsi di dalam objek yang disebut method
// Contoh method pada array
let angka = [1, 2, 3, 4, 5];
console.log(angka); // hasil : [1, 2, 3, 4, 5]
angka.push(6);
console.log(angka); // hasil : [1, 2, 3, 4, 5, 6]
angka.pop();
console.log(angka); // hasil : [1, 2, 3, 4, 5]

// Array dapat menampung berbagai tipe data
let campuran = ["Adi", 25, true];
console.log(campuran); // hasil : ["Adi", 25, true]

// Array dapat menampung array di dalamnya
let arrayDalamArray = ["Adi", ["Budi", "Cindy"], "Dodi"];
console.log(arrayDalamArray); // hasil : ["Adi", ["Budi", "Cindy"], "Dodi"]
console.log(arrayDalamArray[1]); // hasil : ["Budi", "Cindy"]
console.log(arrayDalamArray[1][0]); // hasil : Budi
console.log(arrayDalamArray[1][1]); // hasil : Cindy

// array adalah objek yang dinamis, artinya kita dapat menambah atau mengurangi elemen di dalamnya
arrayDalamArray.push("Eka");
console.log(arrayDalamArray); // hasil : ["Adi", ["Budi", "Cindy"], "Dodi", "Eka"]
arrayDalamArray[1].push("Fani");
console.log(arrayDalamArray); // hasil : ["Adi", ["Budi", "Cindy", "Fani"], "Dodi", "Eka"]
