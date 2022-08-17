const { get } = require('postman-request');
const request = require('postman-request');


const capitalCity = (address) => {
    

    const baseURL = `https://restcountries.com/v3.1/capital/${address}`
    
    request({url: baseURL, json: true}, ((error, response, body) => {
        console.log(body)

        // console.log('THE DATA HERE :::::>', body[0]);
        // console.log('COUNTRY GENERAL NAME:::::::>', body[0]. altSpellings[3]);
        // console.log('COUNTRY CAPITAL:::::::>', body[0].capital[0]);
        // console.log('COUNTRY NAME:::::::>', body[0].name.common);
        // console.log('COUNTRY POPULATION:::::>', body[0].population);

        request({url: myUrl, json: true}, (error, response, body) => {
            //console.log(body[0]);
            const {name: countryName, countryCapital, population} = body[0];

            console.log('country===>', countryName)
            console.log('capital===>', countryCapital)
            console.log('population===>', (population / 1000000).toFixed(1))
        })
    
    }));
    
}
capitalCity('abuja');
capitalCity('paris');
capitalCity('dublin');


const abjLat = 9.0765;
const abjLong = 7.3986;
const access_token = 'pk.b3ba34feb9974e8bbde521355550c146';
const locationURL =`https://us1.locationiq.com/v1/reverse?key=${access_token}&lat=${abjLat}&lon=${abjLong}&format=json`

request({url: locationURL, json: true}, (error, response, body) => {
    console.log(body);
})

// GET https://us1.locationiq.com/v1/reverse?key=YOUR_ACCESS_TOKEN&lat=LATITUDE&lon=LONGITUDE&format=json