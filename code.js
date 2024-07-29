function rand() {
    console.log(Math.round(Math.random() * 100));
};
    

let num = parseInt(prompt(`Enter a temperature in Fahrenheit, we'll convert to Celsius!`));
let temp;

function convertToCelsius(num) {
    let newNum = num - 32;
    let temp = newNum * (5/9);
    return temp;
}

function createMessage(num, temp) {
    if (num > 90 && temp > 32.222) {
        console.log(`It is hot!`)
    } else if (num <= 90 && num >=50 && temp <= 32.222 && temp >= 10) {
        console.log(`It feels good!`)
    } else if (num < 50 && temp < 10)
        {
        console.log(`It is cold!`);
    } else {
        console.log(`Input invalid!`)
    }
}





convertToCelsius(40);
createMessage(49.9, 9);
rand();
