/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/**
 * Get an array with car objects with random color and speed
 * @param {integer} numberOfCars - The number of cars 
 * @returns {array} Array containing the car objects
 */
function generateCars(numberOfCars) {
    const cars = [];

    const carMakes = ['Honda', 'BMW','Fiat','Skoda','Volvo','Tesla', 'Camaro', 'Infiniti', 'Toyota', 'Maserati'];
    const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];
    
    for (let i = 0; i < numberOfCars; i++) {
        const car = {};
        const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
        const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);
        car.make = carMakes[randomMakeIndex];
        car.color = carColors[randomColorIndex];
        car.speed = randomIntFromInterval(0, 100);

        cars.push(car);
    }

    return cars;
}
console.log(generateCars(10));

//1.1 Cars with speeds between 30 and 60

 const lowSpeed = generateCars(10).filter(function(x) {
    return x.speed > 30 && x.speed <60;
});
//1.2 The makes of the cars that are not lightyellow, so the array is going to look like this: ['BMW', 'Fiat'] etc . filter, then map.

const omg = generateCars(10).filter(y => y.color !== 'lightyellow');

const antiLightYellowFan = omg.map(z => z.make);
console.log(antiLightYellowFan);

//1.3: Lets change the cars array so it can be read by a danish person 
//generateCars(numberOfCars);

function changeLanguage(obj) {
    //const danish = {};
    danish['maerke'] = obj.make;
    danish['fart'] = obj.speed;
    danish['farve'] = obj.color;
    return danish;
};
const sprog = generateCars(10).map(changeLanguage);
console.log(sprog);

//style
function changeColor() {
    document.getElementById("body").style.backgroundColor = "lightblue";
}
