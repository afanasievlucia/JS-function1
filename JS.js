function kelvinToFahrenheit(Kelvin) {
    const Celsius = Kelvin - 273;
    let Fahrenheit = Celsius * (9/5) + 32;
    return Fahrenheit = (Math.floor(Fahrenheit));
}
console.log(kelvinToFahrenheit(298));


function humanAgeInDogYears(myAge, myName) {
    let earlyYears = 2 * 10.5;
    let laterYears = (myAge - 2) * 4;
    const humanAgeInDogYears = earlyYears + laterYears;
    console.log(`My name is ${myName} and i'm ${myAge} years old witch is ${humanAgeInDogYears} age in dog years`);
}
humanAgeInDogYears(25, "maria");
humanAgeInDogYears(65, "Sofia");


function answerMyQuestion(userName, userQuestion) {
    let randomNumber = Math.floor (Math.random () * 8);
    let eigthBall = "";
    if (randomNumber == 0 ) {
        eigthBall = "It's true!";
    } else if (randomNumber == 1) {
        eigthBall = "So it is!";
    } else if (randomNumber == 2) {
        eigthBall = "Unpredictibale now.";
    } else if (randomNumber == 3) {
        eigthBall = "Please try again.";
    } else if (randomNumber == 4) {
        eigthBall = "Dont't rely on that.";
    } else if (randomNumber == 5) {
        eigthBall = "My sources say no.";
    } else if (randomNumber == 6) {
        eigthBall = "The prospects are not so good.";
    } else if (randomNumber == 7) {
        eigthBall = "Signs indicate yes!";
    } else if (randomNumber == 8) {
        eigthBall = "You may rely on it!";
    } else {
        eigthBall = "Magic eigth Ball";
    }
    return `Hello ${userName}! The answer of your question: ${userQuestion} is - ${eigthBall} `;
}
console.log(answerMyQuestion("Lucia", "Can i go outside?"));


function raceTime(userAge, registereEarly) {
    let raceNumber = Math.floor (Math.random () * 1000);
    if (userAge >= 18 && registereEarly) {
        raceNumber += 1000;
    }
    if (userAge >=18 && registereEarly ) {
        console.log(`Early registrated adults run at 9:30, with race number: ${raceNumber}`);
    } else if (userAge >=18 && !registereEarly ) {
        console.log(`Later registrated adults run at 11.30, with race number: ${raceNumber}`);
    } else if (userAge <18) {
        console.log(`Youth registrants run at 12:30, with race number: ${raceNumber}`);
    }
}
raceTime( 19, true);