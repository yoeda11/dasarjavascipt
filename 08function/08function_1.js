//Function Sederhana (Deklarasi Fungsi)
function sapa() {
    console.log("Halo dunia!");
}

sapa(); // Output: Halo dunia!


//Function dengan Parameter
function sapaNama(nama) {
    console.log("Halo, " + nama + "!");
}

sapaNama("Conan"); // Output: Halo, Conan!


//Function dengan Return
function tambah(a, b) {
    return a + b;
}

let hasil = tambah(5, 3);
console.log(hasil); // Output: 8


// Function Expression / Mendeklarasikan / Menetapkan Fungsi dengan Variabel
const kali = function(a, b) {
    return a * b;
}

console.log(kali(4, 2)); // Output: 8


//Arrow Function (ES6)
const bagi = (a, b) => a / b;

console.log(bagi(10, 2)); // Output: 5


//Function Sebagai Callback
function prosesData(data, callback) {
    console.log("Memproses data:", data);
    callback();
}

prosesData("Data penting", function() {
    console.log("Selesai memproses!");
});
