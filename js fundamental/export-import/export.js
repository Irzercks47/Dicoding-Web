const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
} 
const isCoffeeMakerReady = true;

//bisa menggunakan ini 
// module.exports = coffeeStock;
// module.exports = isCoffeeMakerReady;

//atau ini
module.exports = {coffeeStock, isCoffeeMakerReady};

//menggunakan es6
export default coffeeStock;
//atau
export { coffeeStock, isCoffeeMakerReady };