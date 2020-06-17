// Factories:
function defineTechs() { // Define the technologies that are going to be used by users.
    let techs = [];

    for (argument in arguments) {
        techs.push(arguments[argument]);
    }

    return techs;
}

function createUser() { // Creates an user.
    let techs = [];

    for (let i = 1; i < arguments.length; i++) { // Arguments Object permits to define function without knowing the exact amount of parameters it's gonna receive.
        techs.push(arguments[i]);
    }

    return {
        name: arguments[0],
        techs: techs
    };
}

function createUsersArray() { // Puts the users in the arguments inside an array of objects.
    let usersArray = [];

    for (argument in arguments) {
        usersArray.push(arguments[argument]);
    }

    return usersArray;
}

// Variables:
const techs = defineTechs('HTML', 'CSS', 'JavaScript', 'Node.js'); // Creates the array of technologies.
const user1 = createUser('Carlos', techs[0], techs[1]); // Creates a new user.
const user2 = createUser('Jasmine', techs[0], techs[1], techs[2]); // Creates a new user.
const user3 = createUser('Tuane', techs[3]); // Creates a new user.
const users = createUsersArray(user1, user2, user3); // Creates array made out of users.

// Logging the users info:
for (user in users) {
    console.log(`${users[user].name} trabalha com ${users[user].techs}.`);
}
