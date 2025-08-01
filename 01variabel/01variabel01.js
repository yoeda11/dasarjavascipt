/*

Variables are Containers for Storing Data / Variabel adalah Wadah untuk Menyimpan Data
JavaScript Variables can be declared in 4 ways: / Variabel JavaScript dapat dideklarasikan dengan 4 cara:

Automatically
Using var
Using let
Using const

In this first example, x, y, and z are undeclared variables. / Dalam contoh pertama ini, x, y, dan z adalah variabel yang tidak dideklarasikan.
They are automatically declared when first used: / Variabel-variabel ini dideklarasikan secara otomatis saat pertama kali digunakan:
*/

// contoh:
x = 5;
y = 6;
z = x + y;

/*
Note / Catatan
It is considered good programming practice to always declare variables before use. / Merupakan praktik pemrograman yang baik untuk selalu mendeklarasikan variabel sebelum digunakan.

From the examples you can guess: / Dari contoh ini Anda dapat menebak:

x stores the value 5 / x menyimpan nilai 5
y stores the value 6 / y menyimpan nilai 6
z stores the value 11 / z menyimpan nilai 11
*/

// contoh menggunakan var
var x = 5;
var y = 6;
var z = x + y;
console.log(z); // output 11

/*
Note / Catatan
The var keyword was used in all JavaScript code from 1995 to 2015. / Kata kunci var digunakan dalam semua kode JavaScript dari tahun 1995 hingga 2015.
The let and const keywords were added to JavaScript in 2015. / Kata kunci let dan const ditambahkan ke JavaScript pada tahun 2015.
The var keyword should only be used in code written for older browsers. / Kata kunci var hanya boleh digunakan dalam kode yang ditulis untuk peramban lama.
*/

// contoh menggunakan let
let x = 5;
let y = 6;
let z = x + y;
console.log(z); // output 11

// contoh menggunakan const
const x = 5;
const y = 6;
const z = x + y;
console.log(z); // output 11

// contoh campuran
const price1 = 5;
const price2 = 6;
let total = price1 + price2;
console.log(total); // output 11

/*
The two variables price1 and price2 are declared with the const keyword. / Kedua variabel price1 dan price2 dideklarasikan dengan kata kunci const.
These are constant values and cannot be changed. / Ini adalah nilai konstan dan tidak dapat diubah.
The variable total is declared with the let keyword. / Variabel total dideklarasikan dengan kata kunci let.
The value total can be changed. / Nilai total dapat diubah.
*/

/*
When to Use var, let, or const? / Kapan Menggunakan var, let, atau const?
1. Always declare variables / Selalu deklarasikan variabel
2. Always use const if the value should not be changed / Selalu gunakan const jika nilai tidak boleh diubah
3. Always use const if the type should not be changed (Arrays and Objects) / Selalu gunakan const jika tipe tidak boleh diubah (Array dan Objek)
4. Only use let if you can't use const / Hanya gunakan let jika Anda tidak dapat menggunakan const
5. Only use var if you MUST support old browsers. / Hanya gunakan var jika Anda HARUS mendukung peramban(browser) lama.
*/


// Just Like Algebra / Seperti Aljabar
// Just like in algebra, variables hold values: / Seperti dalam aljabar, variabel menyimpan nilai:
let x = 5;
let y = 6;

// Just like in algebra, variables are used in expressions: / Seperti dalam aljabar, variabel digunakan dalam ekspresi:
let z = x + y;

// From the example above, you can guess that the total is calculated to be 11. // Dari contoh di atas, Anda dapat menebak bahwa totalnya dihitung menjadi 11.

/*
Note / Catatan
Variables are containers for storing values. / Variabel adalah wadah untuk menyimpan nilai.
*/


/*
JavaScript Identifiers / Pengenal JavaScript
All JavaScript variables must be identified with unique names. / Semua variabel JavaScript harus diidentifikasi dengan nama yang unik.

These unique names are called identifiers. / Nama unik ini disebut pengenal.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume). / Pengenal dapat berupa nama pendek (seperti x dan y) atau nama yang lebih deskriptif (usia, jumlah, totalVolume).

The general rules for constructing names for variables (unique identifiers) are: / Aturan umum untuk membuat nama variabel (pengenal unik) adalah:

Names can contain letters, digits, underscores, and dollar signs. / Nama dapat berisi huruf, angka, garis bawah, dan tanda dolar.
Names must begin with a letter. / Nama harus diawali dengan huruf.
Names can also begin with $ and _ (but we will not use it in this tutorial). / Nama juga dapat diawali dengan $ dan _ (tetapi kami tidak akan menggunakannya dalam tutorial ini).
Names are case sensitive (y and Y are different variables). / Nama bersifat sensitif terhadap huruf besar/kecil (y dan Y adalah variabel yang berbeda).
Reserved words (like JavaScript keywords) cannot be used as names. / Kata-kata yang dicadangkan (seperti kata kunci JavaScript) tidak dapat digunakan sebagai nama.
/*

/*
Note / Catatan
JavaScript identifiers are case-sensitive. / Pengenal JavaScript bersifat sensitif terhadap huruf besar/kecil.
*/


/*
The Assignment Operator / Operator Penugasan
In JavaScript, the equal sign (=) is an "assignment" operator, not an "equal to" operator. / Dalam JavaScript, tanda sama dengan (=) adalah operator "penugasan", bukan operator "sama dengan".

This is different from algebra. The following does not make sense in algebra: / Ini berbeda dari aljabar. Berikut ini tidak masuk akal dalam aljabar:
*/
x = x + 5

/*
In JavaScript, however, it makes perfect sense: it assigns the value of x + 5 to x. / Namun, dalam JavaScript, ini masuk akal: itu menetapkan nilai x + 5 ke x.

(It calculates the value of x + 5 and puts the result into x. The value of x is incremented by 5.) / (Dia menghitung nilai x + 5 dan memasukkan hasilnya ke dalam x. Nilai x ditingkatkan sebesar 5.)

Note / Catatan
The "equal to" operator is written like == in JavaScript. / Operator "sama dengan" ditulis seperti == dalam JavaScript.
*/


/*
JavaScript Data Types / Tipe Data JavaScript
JavaScript variables can hold numbers like 100 and text values like "John Doe". / Variabel JavaScript dapat menyimpan angka seperti 100 dan nilai teks seperti "John Doe".

In programming, text values are called text strings. / Dalam pemrograman, nilai teks disebut string teks.

JavaScript can handle many types of data, but for now, just think of numbers and strings. / JavaScript dapat menangani banyak tipe data, tetapi untuk saat ini, pikirkan saja tentang angka dan string.

Strings are written inside double or single quotes. Numbers are written without quotes. / String ditulis di dalam tanda kutip ganda atau tunggal. Angka ditulis tanpa tanda kutip.

If you put a number in quotes, it will be treated as a text string. / Jika Anda menempatkan angka dalam tanda kutip, itu akan diperlakukan sebagai string teks.
*/

// contoh
const pi = 3.14;
let person = "John Doe";
let answer = 'Yes I am!';


/*
Declaring a JavaScript Variable / Mendeklarasikan Variabel JavaScript
Creating a variable in JavaScript is called "declaring" a variable. / Membuat variabel dalam JavaScript disebut "mendeklarasikan" variabel.
You declare a JavaScript variable with the var or the let keyword: / Anda mendeklarasikan variabel JavaScript dengan kata kunci var atau let:
*/
var carName;

// atau

let carName;


/*
After the declaration, the variable has no value (technically it is undefined). / Setelah deklarasi, variabel tidak memiliki nilai (secara teknis tidak terdefinisi).
To assign a value to the variable, use the equal sign: / Untuk menetapkan nilai ke variabel, gunakan tanda sama dengan:
*/
carName = "Volvo";

// You can also assign a value to the variable when you declare it: / Anda juga dapat menetapkan nilai ke variabel saat mendeklarasikannya:

let carName = "Volvo";


/*
In the example below, we create a variable called carName and assign the value "Volvo" to it. / Dalam contoh di bawah ini, kita membuat variabel bernama carName dan menetapkan nilai "Volvo" ke dalamnya.
Then we "output" the value inside an HTML paragraph with id="demo": / Kemudian kita "mengeluarkan" nilai tersebut ke dalam paragraf HTML dengan id="demo":

<p id="demo"></p>
<script>
let carName = "Volvo";
document.getElementById("demo").innerHTML = carName;
</script>

Note / Catatan
It's a good programming practice to declare all variables at the beginning of a script. / Merupakan praktik pemrograman yang baik untuk mendeklarasikan semua variabel di awal skrip.

*/


/*
One Statement, Many Variables / Satu Pernyataan, Banyak Variabel
You can declare many variables in one statement. / Anda dapat mendeklarasikan banyak variabel dalam satu pernyataan.
Start the statement with let and separate the variables by comma: / Mulai pernyataan dengan let dan pisahkan variabel dengan koma:
*/
let person = "John Doe", carName = "Volvo", price = 200;

// A declaration can span multiple lines: / Deklarasi dapat mencakup beberapa baris:
let person = "John Doe",
carName = "Volvo",
price = 200;


/*
Value = undefined / Nilai = tidak terdefinisi
In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input. / Dalam program komputer, variabel sering kali dideklarasikan tanpa nilai. Nilai tersebut bisa berupa sesuatu yang harus dihitung, atau sesuatu yang akan diberikan nanti, seperti input pengguna.
A variable declared without a value will have the value undefined. / Variabel yang dideklarasikan tanpa nilai akan memiliki nilai tidak terdefinisi.
The variable carName will have the value undefined after the execution of this statement: / Variabel carName akan memiliki nilai tidak terdefinisi setelah eksekusi pernyataan ini:
*/
let carName;
console.log(carName); // output undefined


/*
Re-Declaring JavaScript Variables / Mendeklarasikan Ulang Variabel JavaScript
If you re-declare a JavaScript variable declared with var, it will not lose its value. / Jika Anda mendeklarasikan ulang variabel JavaScript yang dideklarasikan dengan var, itu tidak akan kehilangan nilainya.
The variable carName will still have the value "Volvo" after the execution of these statements: / Variabel carName akan tetap memiliki nilai "Volvo" setelah eksekusi pernyataan ini:
*/
var carName = "Volvo";
var carName;
console.log(carName); // output Volvo

/*
Note / Catatan
You cannot re-declare a variable declared with let or const. / Anda tidak dapat mendeklarasikan ulang variabel yang dideklarasikan dengan let atau const.
This will not work: / Ini tidak akan berhasil:
*/
let carName = "Volvo";
let carName; // SyntaxError: Identifier 'carName' has already been declared

/*
JavaScript Arithmetic / Aritmatika JavaScript
As with algebra, you can do arithmetic with JavaScript variables, using operators like = and +: / Seperti dalam aljabar, Anda dapat melakukan aritmatika dengan variabel JavaScript, menggunakan operator seperti = dan +:
*/
let x = 5 + 2 + 3;
console.log(x); // output 10

// You can also add strings, but strings will be concatenated: / Anda juga dapat menambahkan string, tetapi string akan digabungkan:
let x = "John" + " " + "Doe";
console.log(x); // output John Doe

// Also try this: // Anda juga dapat mencoba ini:
let x = "5" + 2 + 3;
console.log(x); // output 523 /  penggabungan string, bukan aritmatika

/*
Note / Catatan
If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated. / Jika Anda menempatkan angka dalam tanda kutip, sisa angka akan diperlakukan sebagai string, dan digabungkan.
Now try this: / Anda dapat mencoba ini:
*/
let x = 2 + 3 + "5";
console.log(x); // output 55 / penggabungan string, bukan aritmatika

/*
JavaScript Dollar Sign $ / Tanda Dolar JavaScript
Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names: / Karena JavaScript memperlakukan tanda dolar sebagai huruf, pengenal yang mengandung $ adalah nama variabel yang valid:
*/
let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;
console.log($); // output Hello World
console.log($$$); // output 2
console.log($myMoney); // output 5

/*
Using the dollar sign is not very common in JavaScript, but professional programmers often use it as an alias for the main function in a JavaScript library. / Menggunakan tanda dolar tidak umum di JavaScript, tetapi programmer profesional sering menggunakannya sebagai alias untuk fungsi utama dalam pustaka JavaScript.
In the JavaScript library jQuery, for instance, the main function $ is used to select HTML elements. In jQuery $("p"); means "select all p elements". / Dalam pustaka JavaScript jQuery, misalnya, fungsi utama $ digunakan untuk memilih elemen HTML. Dalam jQuery $("p"); berarti "pilih semua elemen p".
*/

/*
JavaScript Underscore (_) / Tanda Garis Bawah JavaScript
Since JavaScript treats underscore as a letter, identifiers containing _ are valid variable names: / Karena JavaScript memperlakukan garis bawah sebagai huruf, pengenal yang mengandung _ adalah nama variabel yang valid:
*/
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;
console.log(_lastName); // output Johnson
console.log(_x); // output 2
console.log(_100); // output 5 

/*
Using the underscore is not very common in JavaScript, but a convention among professional programmers is to use it as an alias for "private (hidden)" variables. / Menggunakan garis bawah tidak umum di JavaScript, tetapi konvensi di antara programmer profesional adalah menggunakannya sebagai alias untuk variabel "pribadi (tersembunyi)".
*/



