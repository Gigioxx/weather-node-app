const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
            {
                value: 1,
                name: `${ '1.'.green } Search City`
            },
            {
                value: 2,
                name: `${ '2.'.green } History`
            },
            {
                value: 0,
                name: `${ '0.'.green } Exit`
            },
        ]
    }
];

const inquirerMenu = async() => {

    console.clear();
    console.log('======================'.green);
    console.log('   Select an option'.white);
    console.log('======================\n'.green);
    
    const { option } = await inquirer.prompt( questions );

    return option;

}

const pause = async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${ 'ENTER'.green } to continue`
        }
    ];
    
    console.log('\n');
    await inquirer.prompt( question );

}

const readInput = async( message ) => {

    const question = [
        {
            type: 'input',
            name: 'description',
            message,
            validate( value ) {
                if ( value.length === 0 ) {
                    return 'Please enter a value';
                }
                return true;
            }
        }
    ];

    const { description } = await inquirer.prompt( question );
    return description;
}

const listPlaces = async( places = [] ) => {

    choices = places.map( (place, i) => {

        const idx = `${i + 1}.`.green;
        
        return {
            value: place.id,
            name: `${ idx } ${ place.name }`
        }

    });

    choices.unshift({
        value: '0',
        name: '0.'.green + 'Cancelar'
    });

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Select a place:',
            choices
        }
    ];

    const { id } = await inquirer.prompt( questions );
    return id;

}

const confirm = async( message ) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt( question );
    return ok;

}

const showChecklist = async( tasks = [] ) => {

    choices = tasks.map( (task, i) => {

        const idx = `${i + 1}.`.green;
        
        return {
            value: task.id,
            name: `${ idx } ${ task.description }`,
            checked: ( task.completedIn ) ? true : false
        }

    });

    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selected',
            choices
        }
    ];

    const { ids } = await inquirer.prompt( question );
    return ids;

}

module.exports = {
    inquirerMenu,
    pause,
    readInput,
    listPlaces,
    confirm,
    showChecklist
}