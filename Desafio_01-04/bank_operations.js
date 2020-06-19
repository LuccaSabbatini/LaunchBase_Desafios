// Factories:
function createUser(name) { // Creates a new user.
    return {
        name: name,
        transactions: [],
        balance: 0
    };
}

function createTransaction(type, value) { // Creates a transaction.
    return {
        type: type,
        value: value
    };
}

// Functions:
function runTransaction(user, transaction) { // Runs a transaction in an user account, updating it's balance and adding it to that user's transactions array.
    const { type, value } = transaction;
    
    // Updating user's balance.
    if (type == 'credit') {
        user.balance += value;
    } else if (type == 'debit') {
        user.balance -= value;
    } else {
        console.trace('ERROR: Invalid transaction type');
    }

    // Adding transaction to the user's list.
    user.transactions.push(transaction); 
}

function getHighestTransactionByType({ name, transactions }, type) {    
    let res = { type: type, value: 0 } // Setting up result for returning.
    
    // Searches for the highest value among transactions of that type in user's history.
    for (transaction in transactions) { // Sweeps the user's transactions.
        if (transactions[transaction].type == type) { // Checks if the transaction in the iteration matches the transaction of the query's type.
            if (transactions[transaction].value > res.value) { // Checks if the transaction was of a higher value than the last highest value.
                res.value = transactions[transaction].value; // If so, updates the result of the query.
            }
        }
    }

    // Handles the lack of results.
    if (res.value == 0) {
        console.log("No records of transactions of that type in user's history");
        res = undefined;
    }

    console.log(`\n${name}'s Highest ${type} Transaction:`)
    return res;
}

function getAverageTransactionValue({ name, transactions }) {
    let res = 0; // Sets up result.

    for (transaction in transactions) { // Sweeps all transactions.
        res += transactions[transaction].value; // Adds the values to the result.
    }

    console.log(`\n${name}'s Average Transaction Value:`);
    return res / transactions.length;
}

function getTransactionsCount({ name, transactions }) {
    let res = { credit: 0, debit: 0 };

    // Searches for the highest value among transactions of that type in user's history.
    for (transaction in transactions) { // Sweeps the user's transactions.
        if (transactions[transaction].type == 'credit') {
            res.credit++;
        } else if (transactions[transaction].type == 'debit') {
            res.debit++;
        } else {
            console.trace('ERROR: Invalid transaction type');
        }
    }

    console.log(`\n${name}'s Transactions Count:`);
    return res;
}

// Variables:
const user = createUser('Lucca');

// Transactions:
runTransaction(user, createTransaction('credit', 100));
runTransaction(user, createTransaction('debit', 50));
runTransaction(user, createTransaction('credit', 200));
runTransaction(user, createTransaction('debit', 100));
runTransaction(user, createTransaction('credit', 300));
runTransaction(user, createTransaction('debit', 150));

// Showing results:
console.log('\n', 'TRANSACTIONS:');
console.table(user.transactions,);
console.log(`BALANCE: ${user.balance}`);
console.log(getHighestTransactionByType(user, 'credit'));
console.log(getHighestTransactionByType(user, 'debit'));
console.log(getAverageTransactionValue(user));
console.log(getTransactionsCount(user));