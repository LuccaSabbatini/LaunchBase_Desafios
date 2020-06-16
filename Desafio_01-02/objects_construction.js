// Factories:
function createUser(userName, companyName, color, focus, address) { // Returns an user object.
    function createCompany(companyName, color, focus, address) { // Returns a company object.
        return {
            name: companyName,
            color: color,
            focus: focus,
            address: address
        };
    }
    
    return {
        name: userName,
        company: createCompany(companyName, color, focus, address)
    };
}

// Variables:
const user = createUser('Lucca', 'RocketSeat', 'Roxo', 'Programação', 'Rua Guilherme Gembala, 260');

// Console.log user info:
console.log(`O nome do usuário é ${user.name}.
Trabalha na empresa ${user.company.name}, localizada em ${user.company.address}.
A cor principal da empresa é ${user.company.color}.
Seu foco é em ${user.company.focus}.`);