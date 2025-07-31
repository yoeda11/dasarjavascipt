/*
JavaScript Arithmetic / Aritmatika JavaScript
JavaScript Arithmetic Operators / Operator Aritmatika JavaScript
Arithmetic operators perform arithmetic on numbers (literals or variables). / Operator aritmatika melakukan aritmatika pada bilangan (literal atau variabel).
*/

/*
 Operator   Description
 +	        Addition
 -	        Subtraction
 *	        Multiplication
 **	        Exponentiation (ES2016)
 /	        Division
 %	        Modulus (Remainder)
 ++	        Increment
 --	        Decrement
*/

// Arithmetic Operations
// A typical arithmetic operation operates on two numbers.

// The two numbers can be literals:
// Kedua angka tersebut dapat berupa literal:
let x = 100 + 50; // output 150

// or variables:
let c = a + b;

// or expressions:
let y = (100 + 50) * z;

/*
Operators and Operands
The numbers (in an arithmetic operation) are called operands. / Angka-angka (dalam operasi aritmatika) disebut operan.

The operation (to be performed between the two operands) is defined by an operator. / Operasi (yang akan dilakukan antara dua operan) didefinisikan oleh sebuah operator.
*/

// Operand      Operator        Operand
// 100          +               50


// Adding / Menambahkan / Penjulahan
// The addition operator (+) adds numbers: / Operator penjumlahan (+) menambahkan angka:
// contoh:
let d = 5;
let e = 2;
let f = d + e;

// Subtracting / Pengurangan
// The subtraction operator (-) subtracts numbers. / Operator pengurangan (-) mengurangi angka.
// contoh:
let g = 5;
let h = 2;
let i = g - h;

// Multiplying / Perkalian
// The multiplication operator (*) multiplies numbers. / Operator perkalian (*) mengalikan angka.
// contoh:
let j = 5;
let k = 2;
let l = j * k;

// Dividing / Pembagian
// The division operator (/) divides numbers. / Operator pembagian (/) membagi angka.
// contoh:
let m = 5;
let n = 2;
let o = m / n;

// Remainder / Sisa Bagi
// The modulus operator (%) returns the division remainder. / Operator modulus (%) mengembalikan sisa pembagian.
// contoh:
let p = 5;
let q = 2;
let r = p % q;

// Incrementing / Penambahan
// The increment operator (++) increments numbers. / Operator penambahan (++) menambah angka.
// contoh:
let s = 5;
s++;
let t = s;

// Decrementing / Penurunan
// The decrement operator (--) decrements numbers. / Operator penurunan (--) mengurangi angka.
// contoh:
let u = 5;
u--;
let v = u;

// Exponentiation / Eksponen 
// Eksponen adalah operasi matematika yang melibatkan bilangan yang dipangkatkan. Dalam istilah sederhana, eksponen menunjukkan berapa kali sebuah angka (basis) dikalikan dengan dirinya sendiri.
// The exponentiation operator (**) raises the first operand to the power of the second operand.
// Operator eksponen (**) menaikkan operan pertama ke pangkat operan kedua.
// contoh:
let aa = 5;
let bb = aa ** 2;

// x ** y produces the same result as Math.pow(x,y):
// x ** y menghasilkan hasil yang sama dengan Math.pow(x,y):
// contoh:
let cc = 5;
let dd = Math.pow(cc,2);

// Operator Precedence / Urutan Operator
/* 
Operator Precedence (Prioritas Operator) adalah aturan yang digunakan oleh bahasa pemrograman (seperti JavaScript) untuk menentukan urutan evaluasi dalam suatu ekspresi yang melibatkan lebih dari satu operator.
Secara sederhana, ini menjelaskan operator mana yang akan dieksekusi terlebih dahulu jika terdapat beberapa operator dalam satu ekspresi.
*/
// Operator precedence describes the order in which operations are performed in an arithmetic expression.
// Urutan operator menjelaskan urutan operasi yang dilakukan dalam suatu ekspresi aritmatika.
// contoh:
let gg = 100 + 50 * 3;

/*
Is the result of example above the same as 150 * 3, or is it the same as 100 + 150?
Is the addition or the multiplication done first?
As in traditional school mathematics, the multiplication is done first.
Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
And (as in school mathematics) the precedence can be changed by using parentheses.
When using parentheses, the operations inside the parentheses are computed first:
*/

/*
Apakah hasil dari contoh di atas sama dengan 150 x 3, atau sama dengan 100 + 150?
Apakah penjumlahan atau perkalian yang dikerjakan terlebih dahulu?
Seperti dalam matematika sekolah tradisional, perkalian dikerjakan terlebih dahulu.
Perkalian (*) dan pembagian (/) memiliki prioritas lebih tinggi daripada penjumlahan (+) dan pengurangan (-).
Dan (seperti dalam matematika sekolah) prioritas tersebut dapat diubah dengan menggunakan tanda kurung.
Saat menggunakan tanda kurung, operasi di dalam tanda kurung dihitung terlebih dahulu:
*/
// contoh:
let hh = (100 + 50) * 3;

// When many operations have the same precedence (like addition and subtraction or multiplication and division), they are computed from left to right:
// Jika banyak operasi memiliki prioritas yang sama (seperti penjumlahan dan pengurangan atau perkalian dan pembagian), operasi tersebut dihitung dari kiri ke kanan:
// contoh:
let ii = 100 + 50 - 3; // 147

// contoh:
let jj = 100 / 50 * 3; // 6


