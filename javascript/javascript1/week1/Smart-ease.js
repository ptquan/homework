const yearOfBirth = 1988;
const yearFuture = 2028;
const futureAge = yearFuture - yearOfBirth;
console.log ("I will be " + futureAge + " years old in " + yearFuture);

//Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;

if (dogYear == true) {
    console.log ("your dog will be " + (dogYear*7) + " dog years old in " + dogYearFuture + ".");
} else {
    console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture + ".");
}

//Housey pricey. housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300
const pGardenPrice = ( 100 * 300);
const pHousePrice = ((8 * 10 * 10) * 2.5 * 1000 + pGardenPrice);
const peterHouseCost = 2500000;
const pCostPerM2 = ( (2500000 - pGardenPrice) / (8 * 10 * 10));

if ( pHousePrice > peterHouseCost) {
    console.log("Congratulations ! You are in good deal :D, Peter .");
}else {
    console.log("Don't by this house,man !");
}
const juliaHouseCost = 1000000;
const jGardenPrice   = (70 * 300);
const jHouseprice    = ((5 * 11 * 8) * 2.5 * 1000 + jGardenPrice);
const jCostPerM2     = ((1000000 - jGardenPrice) / (5 * 11 * 8));

if(jHouseprice > juliaHouseCost){
    console.log("Congratulations ! Julia, you are in good deal :D  !");
}else {
    console.log("it is over price ! ");
}
 if ( jCostPerM2 > pCostPerM2) {
     console.log(" Julia, you are paying more than Peter !" );
 }else {
     console.log(" Julia, you are paying less than Peter !");
 }
 
//Ez Namey   Math.floor(Math.random() * 10) + 1

const firstWords = ["Yeppy", "Sina", "Go", "Happy", "Hot", "Pine", "Tea", "Fast", "Ani", "Ginger"];
const secondWords = ["Kool", "Orange", "Track", "Pola", "Cup", "Move", "Mood", "Candy", "Nem", "Chip"];
const startUpName = firstWords[Math.floor(Math.random() * 10) ] +" " +  secondWords[Math.floor(Math.random() * 10) ];

console.log("The start up name: " + startUpName);