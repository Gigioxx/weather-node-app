const axios = require('axios');

class Searches {

    history = ['Santiago', 'New York', 'Madrid', 'Paris'];

    constructor() {

        // Read DB if exists

    }

    async city( place = '' ) {
        
        try {
            // http request
            // console.log( 'city', place );
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log( resp.data );

            return [];
            
        } catch (error) {
            return [];
        }
        


        return []; // return places

    }

}

module.exports = Searches;