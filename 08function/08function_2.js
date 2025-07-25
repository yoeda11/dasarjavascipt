// function menggunakan return
function luassegitiga(alas, tinggi) {
    const luas = (alas * tinggi) / 2;
    return luas;
}
console.log(luassegitiga(10, 5)); // output 25

// function menggunakan return
function ConvertCelciusToFarenheit(temperatur){
    return (9/5) * temperatur + 32;
}
console.log(ConvertCelciusToFarenheit(90)); // output 194
console.log(ConvertCelciusToFarenheit(100)); // output 212

// contoh penggunaan function

function ConvertCelciusToFarenheit(temperatur){

    const TemperaturInFarenheit = (9/5) * temperatur + 32;

    console.log('Hasil Konversi :' , TemperaturInFarenheit);

}

const TemperaturInCelcius = 90;
const TemperaturInCelcius2 = 100;
const TemperaturInCelcius3 = 90;

console.log(ConvertCelciusToFarenheit);

ConvertCelciusToFarenheit(TemperaturInCelcius);
ConvertCelciusToFarenheit(TemperaturInCelcius2);
ConvertCelciusToFarenheit(TemperaturInCelcius3);