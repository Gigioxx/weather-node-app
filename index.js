const {
        readInput,
        pause,
        inquirerMenu
} = require('./helpers/inquirer');
const Searches = require('./models/searches');


const main = async() => {
    
    const searches = new Searches();
    let opt;

    do {

        opt = await inquirerMenu();
        
        switch ( opt ) {

            case 1:
                // Show message
                const place = await readInput('City: ');
                await searches.city( place );


                // Search places

                // Select place

                // Weather info

                // Show results
                console.log('\nCity Information\n'.green);
                console.log('City:', );
                console.log('Lat:', );
                console.log('Lng:',);
                console.log('Temperature:', );
                console.log('Min:', );
                console.log('Max:', );
                
            break;
            
            case 2:
                
            break;

        }

        if ( opt !== 0 ) await pause();

    } while ( opt !== 0 );

}

main();