// Factories:
function createProgrammer(name, age, items) {
    techs = [];
    
    for (item in items) {
        techs.push(items[item]);
    }
    
    return {
        name: name,
        age: age,
        techs: techs
    };
}

function createTechnlogy(name, spec) {
    return {
        name: name,
        spec: spec,
    };
}

// Create technologies:
const Cpp = createTechnlogy('C++', 'Desktop');
const Python = createTechnlogy('Python', 'Data Science');
const JavaScript = createTechnlogy('JavaScript', 'Web/Mobile');

// Create programmer:
let programmerTechs = [Cpp, Python, JavaScript];
let programmer = createProgrammer('Lucca', 20, programmerTechs)

// Show results in console.
console.log(`${programmer.name} é Developer e tem atualmente ${programmer.age} anos.\n${programmer.name} trabalha com:`);

for (tech in programmer.techs) {
    console.log(`${programmer.techs[tech].name}, com especialidade em ${programmer.techs[tech].spec}`);
}