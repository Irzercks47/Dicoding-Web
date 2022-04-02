//bila ingin menggunakan module untuk export dan import
//<script src="app.js" type="module"></script>
//menggunakan node.js
//module bekerja dengan cara exporting atau importing nilai baik itu variabel, fungsi, array, objek ataupun class agar dapat digunakan pada berkas JavaScript lain. 
//Dalam satu berkas JavaScript terdiri dari satu module, dan di dalamnya kita dapat melakukan export lebih dari satu nilai.
//bisa menggunakan ini
// const coffeeStock = require('./export.js');
//atau
const {coffeeStock, isCoffeeMakerReady} = require('./import.js');


console.log(coffeeStock);
console.log(isCoffeeMakerReady);

/* output
{ arabica: 100, robusta: 150, liberica: 200 }
*/


//Namun ingat, ketika menggunakan destructuring object, pastikan penamaan lokal variabelnya sesuai dengan properti objeknya. 
//Jika tidak, maka variabel tersebut akan menghasilkan undefined.

//es6
import coffeeStock from "./import.js";
``
//atau
import { coffeeStock as stock, isCoffeeMakerReady } from "./import.js";
