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

// Functions:
function searchTechUsers(users, search) { // Searches for users that use a ceratin technology
    let techUsers = [];

    for (user in users) { // For every user in the users array;
        for (tech in users[user].techs) { // For every tech in the user's tech array.
            if (users[user].techs[tech] == search) { // If tech inside the user's tech array is compatible with the searched tech, then:
                techUsers.push(users[user].name); // Pushes the user's name into the tech users array.
            }
        }
    }

    console.log(`${techUsers} trabalham com ${search}.`)
}

// Variables:
const techs = defineTechs('HTML', 'CSS', 'JavaScript', 'Node.js'); // Creates the array of technologies.
const user1 = createUser('Carlos', techs[0], techs[1]); // Creates a new user.
const user2 = createUser('Jasmine', techs[0], techs[2]); // Creates a new user.
const user3 = createUser('Tuane', techs[0], techs[3]); // Creates a new user.
const user4 = createUser('Lucca', techs[1], techs[2]); // Creates a new user.
const user5 = createUser('Rebeca', techs[1], techs[3]); // Creates a new user.
const user6 = createUser('Peter', techs[2], techs[3]); // Creates a new user.
const users = createUsersArray(user1, user2, user3, user4, user5, user6); // Creates array made out of users.

// Search for which users use a certain technology:
searchTechUsers(users, techs[3]);
