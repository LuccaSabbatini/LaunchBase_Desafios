// This program calulates the Body Mass Index (BMI) based on the subject's height and weight.

// Functions:
function bmiCalculator(weight, height) { // BMI Calculator.
    return weight / (height ** 2);
}

function bmiAnalyzer(bmi) { // Verifies if the BMI is in above-ideal-weight range.
    if (bmi <= 30) {
        return ' não ';
    } else {
        return ' ';
    }
}

// Variables:
const name = 'Lucca';
const weight = 67;
const height = 1.88;

// Algorithm:
bmi = bmiCalculator(weight, height).toFixed(2);
ans = bmiAnalyzer(bmi);

// Tells user if it is or not above the ideal weight.
console.log(`${name}, seu IMC é ${bmi}.\nVocê${ans}está acima do peso.`);
