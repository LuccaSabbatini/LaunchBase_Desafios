// This program calculates if the user can already retire or not.

// Functions:
function requirementsAnalyzer(age, contribution, minimumReq, sumReq) {
    if ((contribution >= minimumReq) && (age + contribution >= sumReq)) {
        return ' já ';
    } else if (age > 0 && contribution > 0) {
        return ' ainda não ';
    } else {
        console.log('ERROR: Invalid age and/or contribution time.');
    }
}

function retirementAnalyzer(gender, age, contribution) {
    if (gender == 'F') {
        return requirementsAnalyzer(age, contribution, 30, 85);
    } else if (gender == 'M') {
        return requirementsAnalyzer(age, contribution, 35, 95);
    } else {
        console.log('ERROR: Invalid gender character.');
    }
}

// Variables:
const name = 'Silvana';
const gender = 'F';
const age = 55;
const contribution = 30;

// Algorithm:
ans = retirementAnalyzer(gender, age, contribution);
console.log(`${name}, você${ans}pode se aposentar.`);