// Factories:
function createUser(name, incomes, expenses) { // Creates an user.
    return {
        name: name,
        incomes: incomes,
        expenses: expenses
    };
}

function createUsersArray() { // Puts the users in the arguments inside an array of objects.
    let usersArray = [];

    for (argument in arguments) {
        usersArray.push(arguments[argument]);
    }

    return usersArray;
}

function sumAmounts(values) {
    let amount = 0;

    for (value in values) {
        amount += values[value];
    }

    return amount;
}

// Functions:
function balanceAnalyzer(balance) {
    if (balance > 0) {
        return 'positivo';
    } else if (balance < 0) {
        return 'negativo';
    } else {
        return '';
    }
}

function calculateBalance(users) {
    for (user in users) {
        const totalIncome = sumAmounts(users[user].incomes);
        const totalExpense = sumAmounts(users[user].expenses);
        const balance = totalIncome - totalExpense;
        const balanceAnalysis = balanceAnalyzer(balance);

        console.log(`${users[user].name} possui um saldo ${balanceAnalysis} de R$${balance.toFixed(2)}.`)
    }
}

// Variables:
const user1 = createUser('Salvio', [115.3, 48.7, 98.3, 14.5], [85.3, 13.5, 19.9]); // Creates an user.
const user2 = createUser('Marcio', [24.6, 214.3, 45.3], [185.3, 12.1, 120.0]); // Creates an user.
const user3 = createUser('Lucia', [9.8, 120.3, 340.2, 45.3], [450.2, 29.9]); // Creates an user.
const users = createUsersArray(user1, user2, user3); // Creates array made out of users.

// Calculates the financial balance of all users and then logs them.
calculateBalance(users);
