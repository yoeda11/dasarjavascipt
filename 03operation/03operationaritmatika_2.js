// JavaScript Arithmetic
// JavaScript Arithmetic Operators
// Arithmetic operators perform arithmetic on numbers (literals or variables).
// Operator aritmatika melakukan operasi aritmatika pada angka (literal atau variabel).

//  Operator    Description
//  +	        Addition
//  -	        Subtraction
//  *	        Multiplication
//  **	        Exponentiation (ES2016)
//  /	        Division
//  %	        Modulus (Remainder)
//  ++	        Increment
//  --	        Decrement

// Arithmetic Operations
// A typical arithmetic operation operates on two numbers.

// The two numbers can be literals:
// Kedua angka tersebut dapat berupa literal:
let x = 100 + 50; // output 150

// or variables:
let x = a + b;

// or expressions:
let x = (100 + 50) * a;


// Operators and Operands
// The numbers (in an arithmetic operation) are called operands.
// Angka-angka (dalam operasi aritmatika) disebut operan.

// The operation (to be performed between the two operands) is defined by an operator.
// Operasi (yang akan dilakukan antara dua operan) didefinisikan oleh sebuah operator.

// Operand      Operator        Operand
// 100          +               50


// Adding
// The addition operator (+) adds numbers:
// contoh:
let x = 5;
let y = 2;
let z = x + y;

// Subtracting
// The subtraction operator (-) subtracts numbers.
// contoh:
let x = 5;
let y = 2;
let z = x - y;

// Multiplying
// The multiplication operator (*) multiplies numbers.
// contoh:
let x = 5;
let y = 2;
let z = x * y;

// Dividing
// The division operator (/) divides numbers.
// contoh:
let x = 5;
let y = 2;
let z = x / y;

// Remainder
// The modulus operator (%) returns the division remainder.
// contoh:
let x = 5;
let y = 2;
let z = x % y;

// Incrementing
// The increment operator (++) increments numbers.
// contoh:
let x = 5;
x++;
let z = x;

// Decrementing
// The decrement operator (--) decrements numbers.
// contoh:
let x = 5;
x--;
let z = x;

// Exponentiation / Eksponen 
// Eksponen adalah operasi matematika yang melibatkan bilangan yang dipangkatkan. Dalam istilah sederhana, eksponen menunjukkan berapa kali sebuah angka (basis) dikalikan dengan dirinya sendiri.
// The exponentiation operator (**) raises the first operand to the power of the second operand.
// Operator eksponen (**) menaikkan operan pertama ke pangkat operan kedua.
// contoh:
let x = 5;
let z = x ** 2;

// x ** y produces the same result as Math.pow(x,y):
// contoh:
let x = 5;
let z = Math.pow(x,2);
// x ** y produces the same result as Math.pow(x,y):
// x ** y menghasilkan hasil yang sama dengan Math.pow(x,y):
// contoh:
let x = 5;
let z = Math.pow(x,2);

// Operator Precedence / Urutan Operator
/* 
Operator Precedence (Prioritas Operator) adalah aturan yang digunakan oleh bahasa pemrograman (seperti JavaScript) untuk menentukan urutan evaluasi dalam suatu ekspresi yang melibatkan lebih dari satu operator.
Secara sederhana, ini menjelaskan operator mana yang akan dieksekusi terlebih dahulu jika terdapat beberapa operator dalam satu ekspresi.
*/
// Operator precedence describes the order in which operations are performed in an arithmetic expression.
// Urutan operator menjelaskan urutan operasi yang dilakukan dalam suatu ekspresi aritmatika.
// contoh:
let x = 100 + 50 * 3;

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
let x = (100 + 50) * 3;

// When many operations have the same precedence (like addition and subtraction or multiplication and division), they are computed from left to right:
// Jika banyak operasi memiliki prioritas yang sama (seperti penjumlahan dan pengurangan atau perkalian dan pembagian), operasi tersebut dihitung dari kiri ke kanan:
// contoh:
let x = 100 + 50 - 3; // 147

// contoh:
let x = 100 / 50 * 3;


