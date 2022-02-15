const { readInput } = require('./helpers/inquirer');


const main = async() => {
    
    const text = await readInput('Test: ');

    console.log(text);

}

main();