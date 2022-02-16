require('dotenv').config();

const { readInput, pause, inquirerMenu, listPlaces } = require('./helpers/inquirer');
const Searches = require('./models/searches');

const main = async() => {
    
    const searches = new Searches();
    let opt;

    do {

        opt = await inquirerMenu();
        
        switch ( opt ) {

            case 1:
                // Show message
                const searchTerm = await readInput('City: ');
                
                // Search places
                const places = await searches.city( searchTerm );
                
                // Select place
                const id = await listPlaces( places );
                const selectedPlace = places.find( place => place.id === id );

                // Weather info
                const weather = await searches.placeWeather( selectedPlace.lat, selectedPlace.lng );

                // Show results
                console.clear();
                console.log( '\nCity Information\n'.green );
                console.log( 'City:', selectedPlace.name.green );
                console.log( 'Lat:', selectedPlace.lat );
                console.log( 'Lng:', selectedPlace.lng );
                console.log( 'Temperature:', weather.temp );
                console.log( 'Min:', weather.min );
                console.log( 'Max:', weather.max );
                console.log( 'How is the weather?', weather.description.green );
                
            break;
            
            case 2:
                
            break;

        }

        if ( opt !== 0 ) await pause();

    } while ( opt !== 0 );

}

main();