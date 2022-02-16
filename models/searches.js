const axios = require('axios');

class Searches {

    history = ['Santiago', 'New York', 'Madrid', 'Paris'];

    constructor() {

        // Read DB if exists

    }

    get ParamsMapbox() {
        return {
            'access_token': 'pk.eyJ1IjoiZ2lnaW94eCIsImEiOiJja3plaXg3NDAyZ3hyMnVwcXZscGpwYml2In0.WX8De1C_vIrQRvErolbqwQ',
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