/*
JavaScript Comparison and Logical Operators / Perbandingan JavaScript dan Operator Logika
Comparison and Logical operators are used to test for true or false.
Operator perbandingan dan logika digunakan untuk menguji benar atau salah.
*/

/*
Comparison Operators / Operator Perbandingan
Comparison operators are used in logical statements to determine equality or difference between variables or values.
Operator perbandingan digunakan dalam pernyataan logika untuk menentukan persamaan atau perbedaan antara variabel atau nilai.
*/

/*
Given that x = 5, the table below explains the comparison operators:
Mengingat x = 5, tabel di bawah ini menjelaskan operator perbandingan:
*/

/*
Operator    Description                         Comparing       Returns
==	        equal to                            x == 8          false	
                                                x == 5          true	
                                                x == "5"        true	
===	        equal value and equal type          x === 5	        true	
                                                x === "5"	    false	
!=	        not equal	                        x != 8	        true	
!==	        not equal value or not equal type   x !== 5	        false	
                                                x !== "5"	    true	
                                                x !== 8	        true	
>	        greater than	                    x > 8	        false	
<	        less than	                        x < 8	        true	
>=	        greater than or equal to	        x >= 8	        false	
<=	        less than or equal to	            x <= 8	        true	
*/


/*
How Can it be Used / Bagaimana Cara Menggunakannya 
Comparison operators can be used in conditional statements to compare values and take action depending on the result: / Operator perbandingan dapat digunakan dalam pernyataan kondisional untuk membandingkan nilai dan mengambil tindakan berdasarkan hasilnya:
*/

if (age < 18) text = "Too young to buy alcohol"; // Jika usia kurang dari 18, teks akan menjadi "Terlalu muda untuk membeli alkohol"

// You will learn more about the use of conditional statements in the next chapter of this tutorial. / Anda akan mempelajari lebih lanjut tentang penggunaan pernyataan kondisional di bab berikutnya dari tutorial ini.


/*
Logical Operators / Operator Logika
Logical operators are used to determine the logic between variables or values. / Operator logika digunakan untuk menentukan logika antar variabel atau nilai.
Given that x = 6 and y = 3, the table below explains the logical operators: / Mengingat x = 6 dan y = 3, tabel di bawah ini menjelaskan operator logika:
*/

/*
Operator    Description	    Example
&&	        and	            (x < 10 && y > 1) is true	
||	        or	            (x == 5 || y == 5) is false	
!	        not	            !(x == y) is true	
*/


/*
Conditional (Ternary) Operator / Operator Kondisional (Terner)
JavaScript also contains a conditional operator that assigns a value to a variable based on some condition. / JavaScript juga berisi operator kondisional yang menetapkan nilai ke variabel berdasarkan kondisi tertentu.
*/

// Syntax
// variablename = (condition) ? value1:value2 

variablename = (condition) ? value1:value2 

// contoh:
let age = 20; // Usia 20 tahun
let voteable = (age < 18) ? "Too young":"Old enough"; // Jika usia kurang dari 18, voteable akan menjadi "Terlalu muda", jika tidak, akan menjadi "Cukup umur".

// If the variable age is a value below 18, the value of the variable voteable will be "Too young", otherwise the value of voteable will be "Old enough".
// Jika variabel usia bernilai di bawah 18 tahun, nilai variabel yang dapat dipilih akan menjadi "Terlalu muda", jika tidak, nilai yang dapat dipilih akan menjadi "Cukup umur".


/*
Comparing Different Types / Membandingkan Tipe yang Berbeda
Comparing data of different types may give unexpected results. / Membandingkan data dengan tipe yang berbeda dapat memberikan hasil yang tidak terduga.
When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. An empty string converts to 0. A non-numeric string converts to NaN which is always false. / Saat membandingkan string dengan angka, JavaScript akan mengonversi string tersebut menjadi angka saat melakukan perbandingan. String kosong akan dikonversi menjadi 0. String non-numerik akan dikonversi menjadi NaN yang selalu bernilai salah.
*/

/*
Case                Value	
2 < 12	            true	
2 < "12"	        true	
2 < "John"	        false	
2 > "John"	        false	
2 == "John"	        false	
"2" < "12"	        false	
"2" > "12"	        true	
"2" == "12"	        false	
*/

/*
When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2. / Saat membandingkan dua string, "2" akan lebih besar daripada "12", karena (berdasarkan abjad) 1 lebih kecil daripada 2.
To secure a proper result, variables should be converted to the proper type before comparison: / Untuk mendapatkan hasil yang tepat, variabel harus dikonversi ke tipe yang tepat sebelum perbandingan:
*/

age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}


/*
The Nullish Coalescing Operator (??) / Operator Penggabungan Nullish (??)
The ?? operator returns the first argument if it is not nullish (null or undefined). / Operator ?? mengembalikan argumen pertama jika bukan nullish (null atau undefined).
Otherwise it returns the second argument. / Jika tidak, operator ini mengembalikan argumen kedua.
*/

let name = null;
let text = "missing";
let result = name ?? text;


/*
The Optional Chaining Operator (?.) / Operator Rantai Opsional (?.)
The ?. operator returns undefined if an object is undefined or null (instead of throwing an error). / Operator ?. mengembalikan undefined jika suatu objek tidak terdefinisi atau null (bukannya memunculkan kesalahan).
*/

// contoh:
const car = {type:"Fiat", model:"500", color:"white"}; // Create an object:
document.getElementById("demo").innerHTML = car?.name; // Ask for car name:



