/*
JavaScript Assignment Operators / Operator Penugasan JavaScript
Assignment operators assign values to JavaScript variables. / Operator penugasan menetapkan nilai ke variabel JavaScript.

Operator    Example     Same As
=           x = y       x = y
+=          x += y      x = x + y
-=          x -= y      x = x - y
*=          x *= y      x = x * y
/=          x /= y      x = x / y
%=          x %= y      x = x % y
**=         x **= y     x = x ** y


Shift Assignment Operators
Operator        Example         Same As
<<=             x <<= y         x = x << y
>>=             x >>= y         x = x >> y
>>>=            x >>>= y        x = x >>> y


Bitwise Assignment Operators
Operator	    Example	        Same As
&=	            x &= y	        x = x & y
^=	            x ^= y	        x = x ^ y
|=	            x |= y	        x = x | y

Logical Assignment Operators
Operator	    Example	        Same As
&&=	            x &&= y	        x = x && (x = y)
||=	            x ||= y	        x = x || (x = y)
??=	            x ??= y	        x = x ?? (x = y)

Note
The Logical assignment operators are ES2020.

*/


/*
The = Operator / Operator = Penugasan Sederhana
The Simple Assignment Operator assigns a value to a variable. / Operator Penugasan Sederhana menetapkan nilai ke suatu variabel.
Simple Assignment Examples. / Contoh Penugasan Sederhana.
*/
let x = 10; // Menetapkan nilai 10 ke variabel x
let y = 10 + z; // Menetapkan nilai 10 + z ke variabel y


/*
The += Operator / Operator += Penugasan Penjumlahan
The Addition Assignment Operator adds a value to a variable. / Operator Penugasan Penjumlahan menambahkan nilai ke variabel.
Addition Assignment Examples / Contoh Penugasan Penjumlahan
*/

// contoh:
let a = 10; // Menetapkan nilai 10 ke variabel a
a += 5; // Menetapkan nilai a + 5 ke variabel a // output 15

// contoh:
let text = "Hello"; text += " World"; // Menetapkan nilai "Hello World" ke variabel text // output "Hello World"


/*
The -= Operator / Operator -= Penugasan Pengurangan
The Subtraction Assignment Operator subtracts a value from a variable. / Operator Penugasan Pengurangan mengurangi suatu nilai dari suatu variabel.
Subtraction Assignment Example / Contoh Penugasan Pengurangan
*/

// contoh:
let b = 10; // Menetapkan nilai 10 ke variabel b
b -= 5; // Menetapkan nilai b - 5 ke variabel b // output 5


/*
The *= Operator / Operator *= Penugasan Perkalian
The Multiplication Assignment Operator multiplies a variable. / Operator Penugasan Perkalian mengalikan suatu variabel.
Multiplication Assignment Example / Contoh Penugasan Perkalian
*/

// contoh:
let c = 10; // Menetapkan nilai 10 ke variabel c
c *= 5; // Menetapkan nilai c * 5 ke variabel c // output 50


/*
The **= Operator / Operator **= Penugasan Eksponen / bilangan berpangkat
The Exponentiation Assignment Operator raises a variable to the power of the operand. / Operator Penugasan Eksponen menaikkan variabel ke pangkat operan.
Exponentiation Assignment Example / Contoh Penugasan Eksponen
*/

// contoh:
let d = 10; // Menetapkan nilai 10 ke variabel d
d **= 5; // Menetapkan nilai d ** 5 ke variabel d // output 100000


/*
The /= Operator / Operator /= Penugasan Pembagian
The Division Assignment Operator divides a variable. / Operator Penugasan Pembagian membagi suatu variabel.
Division Assignment Example / Contoh Penugasan Pembagian
*/

// contoh:
let e = 10; // Menetapkan nilai 10 ke variabel e
e /= 5; // Menetapkan nilai e / 5 ke variabel e // output 2


/*
The %= Operator / Operator %= Penugasan Modulus (Sisa Bagi)
The Remainder Assignment Operator assigns a remainder to a variable. / Operator Penetapan Sisa Bagi menetapkan sisa ke suatu variabel.
Remainder Assignment Example / Contoh Penetapan Sisa Bagi
*/

// contoh:
let f = 10; // Menetapkan nilai 10 ke variabel f
f %= 5; // Menetapkan nilai f % 5 ke variabel f // output 0


/*
The <<= Operator / Operator <<= Penugasan Shift Kiri
The Left Shift Assignment Operator left shifts a variable. / Operator Penetapan Shift Kiri menggeser variabel ke kiri.
Left Shift Assignment Example / Contoh Penetapan Shift Kiri
*/

// contoh:
let g = -100; // Menetapkan nilai -100 ke variabel g
g <<= 5; // Menetapkan nilai g << 5 ke variabel g // output -3200


/*
The >>= Operator / Operator >>= Penugasan Shift Kanan
The Right Shift Assignment Operator right shifts a variable (signed). / Operator Penetapan Shift Kanan menggeser variabel ke kanan (bertanda).
Right Shift Assignment Example / Contoh Penetapan Shift Kanan
*/

let h = -100; // Menetapkan nilai -100 ke variabel h
h >>= 5; // Menetapkan nilai h >> 5 ke variabel h // output -4


/*
The >>>= Operator / Operator >>>= Penugasan Shift Kanan Tanpa Tanda
The Unsigned Right Shift Assignment Operator right shifts a variable (unsigned). / Operator Penetapan Geser Kanan Tak Bertanda menggeser variabel ke kanan (tak bertanda).
Unsigned Right Shift Assignment Example / Contoh Penetapan Geser Kanan Tak Bertanda
*/

// contoh:
let i = -100; // Menetapkan nilai -100 ke variabel i
i >>>= 5; // Menetapkan nilai i >>> 5 ke variabel i // output 134217724


/*
The &= Operator / Operator &= Penugasan Bitwise AND
The Bitwise AND Assignment Operator does a bitwise AND operation on two operands and assigns the result to the the variable. / Operator Penugasan Bitwise AND melakukan operasi bitwise AND pada dua operan dan menetapkan hasilnya ke variabel.
Bitwise AND Assignment Example / Contoh Penugasan Bitwise AND
*/

// contoh:
let j = 10; // Menetapkan nilai 10 ke variabel j
j &= 5; // Menetapkan nilai j & 5 ke variabel j // output 0


/*
The |= Operator / Operator |= Penugasan Bitwise OR
The Bitwise OR Assignment Operator does a bitwise OR operation on two operands and assigns the result to the variable. / Operator Penugasan Bitwise OR melakukan operasi bitwise OR pada dua operan dan menetapkan hasilnya ke variabel.
Bitwise OR Assignment Example / Contoh Penugasan Bitwise OR
*/

// contoh:
let k = 10; // Menetapkan nilai 10 ke variabel k
k |= 5; // Menetapkan nilai k | 5 ke variabel k // output 15


/*
The ^= Operator / Operator ^= Penugasan Bitwise XOR
The Bitwise XOR Assignment Operator does a bitwise XOR operation on two operands and assigns the result to the variable. / Operator Penugasan Bitwise XOR melakukan operasi XOR bitwise pada dua operan dan menetapkan hasilnya ke variabel.
Bitwise XOR Assignment Example / Contoh Penugasan Bitwise XOR
*/

// contoh:
let l = 10; // Menetapkan nilai 10 ke variabel l
l ^= 5; // Menetapkan nilai l ^ 5 ke variabel l // output 15


/*
The &&= Operator / Operator &&= Penugasan Logika AND
The Logical AND assignment operator is used between two values. / Operator penugasan logika AND digunakan di antara dua nilai.
If the first value is true, the second value is assigned. / Jika nilai pertama benar, nilai kedua akan ditetapkan.
Logical AND Assignment Example / Contoh Penugasan Logika AND
*/

// contoh:
let m = 10; // Menetapkan nilai 10 ke variabel m
m &&= 5; // Menetapkan nilai m && 5 ke variabel m // output 5

// The &&= operator is an ES2020 feature. / Operator &&= adalah fitur ES2020.


/*
The ||= Operator / Operator ||= Penugasan Logika OR
The Logical OR assignment operator is used between two values. / Operator penugasan Logika OR digunakan di antara dua nilai.
If the first value is false, the second value is assigned. / Jika nilai pertama salah, nilai kedua akan ditetapkan.
Logical OR Assignment Example / Contoh Penugasan Logika OR
*/

// contoh:
let n = 10; // Menetapkan nilai 10 ke variabel n
n ||= 5; // Menetapkan nilai n || 5 ke variabel n // output 10

// The ||= operator is an ES2020 feature. / Operator ||= adalah fitur ES2020.




/*
The ??= Operator
The Nullish coalescing assignment operator is used between two values. / Operator penugasan penggabungan Nullish digunakan di antara dua nilai.
If the first value is undefined or null, the second value is assigned. / Jika nilai pertama tidak terdefinisi atau null, nilai kedua akan ditetapkan.
Nullish Coalescing Assignment Example / Contoh Penugasan Penggabungan Nullish
*/

// contoh:
let o; // Menetapkan nilai undefined ke variabel o
o ??= 5; // Menetapkan nilai o ?? 5 ke variabel o // output 5

// The ??= operator is an ES2020 feature. / Operator ??= adalah fitur ES2020.


