const axios = require('axios');

class Searches {

    history = ['Santiago', 'New York', 'Madrid', 'Paris'];

    constructor() {

        // Read DB if exists

    }

    get ParamsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'en'
        }
    }

    async city( place = '' ) {
        
        try {
            // http request
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ place }.json`,
                params: this.ParamsMapbox
            });

            const resp = await instance.get();
            console.log( resp.data );

            return [];
            
        } catch (error) {
            return [];
        }
        


        return []; // return places

    }

}

module.exports = Searches;