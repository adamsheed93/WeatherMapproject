// const { url } = require('inspector');
const request = require('postman-request');
// const lat = '37.8267';
// const long = '-122.4233';




const accessKey = '61f5ac99a219e19308e4f4e93ebbdbfe';
// const baseURL = `http://api.weatherstack.com/current?access_key${accessKey}=&query=${lat},${long}`
const weatherStackAPI = 'http://api.openweathermap.org/data/2.5/weather?q=texas&units=metric&appid=61f5ac99a219e19308e4f4e93ebbdbfe'

request ({url: weatherStackAPI, json: true}, (error, response, body) => {

    if (error) {
        console.log('Unable to connect!')
    } else if (body.length === 0) {
        console.log('Unable to find location...try again')
    } else {
        const {temp, feels_like} = body.main;
        console.log(`the temperature is ${Math.trunc(temp)} but it feels like its${Math.trunc(feels_like)}`);
    }
    // const data = JSON.parse(body)
    //console.log('this is the data ==>', typeof body);
    // console.log(body.main.temp);
    // const {temp, feels_like} = body.main;
    // console.log(`the temperature is ${Math.trunc(temp)} but it feels like its${Math.trunc(feels_like)}`);

});


//http://api.weatherstack.com/current?access_key=b8009c06aa508d38f4f725162ea0d597&query=37.8267,-122.4233;



//OPEN WEATHER 

//http://api.openweathermap.org/data/2.5/weather?q=city&units=metric&appid=apiKey
//http://api.openweathermap.org/data/2.5/weather?q=texas&units=metric&appid=61f5ac99a219e19308e4f4e93ebbdbfe
