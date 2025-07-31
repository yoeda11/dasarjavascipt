// Javascript operators are used to perform different types of mathematical and logical computations. / Operator JavaScript digunakan untuk melakukan berbagai jenis komputasi matematika dan logika.

/*
Contoh:
The Assignment Operator = assigns values. / Operator Penugasan = menetapkan nilai
The Addition Operator + adds values. / Operator Penjumlahan + menambahkan nilai
The Multiplication Operator * multiplies values. / Operator Perkalian * mengalikan nilai
The Comparison Operator > compares values. / Operator Perbandingan > membandingkan nilai
*/

// JavaScript Assignment / Penugasan JavaScript
// The Assignment Operator (=) assigns a value to a variable: / Operator Penugasan (=) menetapkan nilai ke variabel:
// Assignment Examples / Contoh Tugas / Penugasan
let xyz = 10; // Tetapkan nilai 10 ke variabel xyz
console.log(xyz); // Output: 10

let x = 5; // Tetapkan nilai 5 ke x
let y = 2; // Tetapkan nilai 2 ke y
let z = x + y; // Tetapkan nilai x + y ke z:

// JavaScript Addition / Penambahan JavaScript
// The Addition Operator (+) adds numbers: / Operator Penjumlahan (+) menambahkan angka:
let a = 5;
let b = 2;
let c = a + b;
console.log(c); // output 7

// JavaScript Multiplication / Perkalian JavaScript
// The Multiplication Operator (*) multiplies numbers: / Operator Perkalian (*) mengalikan angka:
let d = 5;
let e = 2;
let f = d * e;
console.log(f); // output 10


/*
Jenis-jenis Operator JavaScript
Ada berbagai jenis operator JavaScript:
Arithmetic Operators / Operator Aritmatika
Assignment Operators / Operator Penugasan
Comparison Operators / Operator Perbandingan
String Operators / Operator String
Logical Operators / Operator Logika
Bitwise Operators / Operator Bitwise
Ternary Operators / Operator Terner
Type Operators / Operator Tipe
*/

// Operator Aritmatika JavaScript
// Operator Aritmatika digunakan untuk melakukan aritmatika pada angka:
// Contoh Operator Aritmatika
let g = 3;
let h = (100 + 50) * g; // output 450


// JavaScript Assignment Operators / Operator Penugasan JavaScript
// Assignment operators assign values to JavaScript variables. / Operator penugasan menetapkan nilai ke variabel JavaScript.
// The Addition Assignment Operator (+=) adds a value to a variable. / Operator Penugasan Penjumlahan (+=) menambahkan nilai ke variabel.

// Contoh Operator Penugasan
let i = 10;
i += 5; // i sekarang 15

/*
Operator    Example    Same As
=           x = y       x = y
+=          x += y      x = x + y
-=          x -= y      x = x - y
*=          x *= y      x = x * y
/=          x /= y      x = x / y
%=          x %= y      x = x % y
**=         x **= y     x = x ** y
*/


/*
JavaScript Comparison Operators / Operator Perbandingan JavaScript

Operator    Description
==          equal to
===         equal value and equal type
!=          not equal
!==         not equal value or not equal type
>           greater than
<           less than
>=          greater than or equal to
<=          less than or equal to
?           ternary operator
*/


/*
JavaScript String Comparison / Perbandingan String JavaScript
All the comparison operators above can also be used on strings: / Semua operator perbandingan di atas juga dapat digunakan pada string:
*/

let text1 = "A";
let text2 = "B";
let result = text1 < text2;
console.log(result); // output: true

// Note that strings are compared alphabetically: / Perhatikan bahwa string dibandingkan berdasarkan abjad:

let text3 = "20";
let text4 = "5";
let hasil = text3 < text4;
console.log(hasil); // output: false (because "2" is greater than "5")

/*
JavaScript String Addition / Penambahan String JavaScript
The + can also be used to add (concatenate) strings: / Tanda + juga dapat digunakan untuk menambahkan (menggabungkan) string:
*/

let text5 = "John";
let text6 = "Doe";
let text7 = text5 + " " + text6; // output "John Doe"

// The += assignment operator can also be used to add (concatenate) strings: / Operator penugasan += juga dapat digunakan untuk menambahkan (menggabungkan) string:

let text8 = "What a very ";
text8 += "nice day"; // output "What a very nice day"

/*
The result of text8 will be: / Hasil dari text8 akan menjadi:
"What a very nice day"

Note / Catatan
When used on strings, the + operator is called the concatenation operator. / Ketika digunakan pada string, operator + disebut operator penggabungan.
*/


/*
Adding Strings and Numbers / Menjumlahkan String dan Angka
Adding two numbers, will return the sum as a number like 5 + 5 = 10. / Menjumlahkan dua angka akan menghasilkan hasil penjumlahan berupa angka, misalnya 5 + 5 = 10.
Adding a number and a string, will return the sum as a concatenated string like 5 + "5" = "55". / Menjumlahkan angka dan string akan menghasilkan hasil penjumlahan berupa string gabungan, misalnya 5 + "5" = "55".
*/

let j = 5 + 5; // output 10
let k = "5" + 5; // output "55"
let l = "Hello" + 5; // output "Hello5"

/*
The result of x, y, and z will be: / Hasil dari x, y, dan z adalah:

10
55
Hello5

Note / Catatan
If you add a number and a string, the result will be a string! / Jika Anda menambahkan angka dan string, hasilnya akan berupa string!
*/


/*
JavaScript Logical Operators / Operator Logika JavaScript

Operator    Description
&&          logical and
||          logical or
!           logical not

Note / Catatan
Logical operators are fully described in the JS Comparisons chapter. / Operator logika dijelaskan sepenuhnya dalam bab Perbandingan JS.
*/


/*
JavaScript Type Operators

Operator        Description
typeof          Returns the type of a variable
instanceof      Returns true if an object is an instance of an object type

Note / Catatan
Type operators are fully described in the JS Type Conversion chapter. / Operator tipe dijelaskan sepenuhnya dalam bab Konversi Tipe JS.
*/


/*
JavaScript Bitwise Operators / Operator Bitwise JavaScript
Bit operators work on 32 bits numbers. / Operator bit bekerja pada angka 32 bit.
Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.
Setiap operan numerik dalam operasi ini dikonversi menjadi angka 32 bit. Hasilnya dikonversi kembali menjadi angka JavaScript.

Operator    Description             Example     Same as         Result      Decimal
&           AND	                    5 & 1       0101 & 0001     0001        1
|           OR	                    5 | 1       0101 | 0001     0101	    5
~           NOT	                    ~ 5	        ~0101           1010        10
^           XOR	                    5 ^ 1       0101 ^ 0001     0100        4
<<          left shift	            5 << 1      0101 << 1       1010        10
>>          right shift	            5 >> 1      0101 >> 1       0010	    2
>>>         unsigned right shift	5 >>> 1	    0101 >>> 1      0010	    2

The examples above uses 4 bits unsigned examples. But JavaScript uses 32-bit signed numbers.
Because of this, in JavaScript, ~ 5 will not return 10. It will return -6.
~00000000000000000000000000000101 will return 11111111111111111111111111111010
Bitwise operators are fully described in the JS Bitwise chapter.

Contoh di atas menggunakan 4 bit unsigned. Namun, JavaScript menggunakan angka bertanda 32-bit.
Oleh karena itu, dalam JavaScript, ~5 tidak akan mengembalikan 10. Ia akan mengembalikan -6.
~00000000000000000000000000000101 akan mengembalikan 11111111111111111111111111111010
Operator bitwise dijelaskan selengkapnya di bab JS Bitwise.
*/


