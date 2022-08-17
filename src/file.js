const request = require('postman-request');


const countryName = 'nigeria';


const baseUrl = `https://restcountries.com/v2/name/${countryName}`

request({url: baseUrl, json: true}, ((error, response, body) => {
    console.log(body)

}));
