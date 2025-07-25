// 1. Primitives (Tipe Data Dasar)
// String
let nama = "Yuda";
console.log(typeof nama); // Output: string

// Number
let umur = 25;
let berat = 55.5;
console.log(typeof umur);  // Output: number

// Boolean
let lulus = true;
let gagal = false;
console.log(typeof lulus); // Output: boolean

// Undefined
let nilai;
console.log(nilai);        // Output: undefined
console.log(typeof nilai); // Output: undefined

// Null (khusus, dianggap object oleh typeof)
let kosong = null;
console.log(kosong);         // Output: null
console.log(typeof kosong);  // Output: object (quirk JS)

// Symbol (unik dan immutable)
let id = Symbol("userID");
console.log(typeof id); // Output: symbol

// BigInt (untuk angka besar > 2⁵³)
let angkaBesar = 1234567890123456789012345678901234567890n;
console.log(typeof angkaBesar); // Output: bigint


// 2. Non-Primitives (Reference Types)
// Object
let orang = {
    nama: "Budi",
    umur: 30
};
console.log(typeof orang); // Output: object

// Array (termasuk object)
let buah = ["apel", "jeruk", "mangga"];
console.log(typeof buah);       // Output: object
console.log(Array.isArray(buah)); // Output: true

// Function
function sapa() {
    console.log("Halo!");
}
console.log(typeof sapa); // Output: function

