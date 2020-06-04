const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1c49a3520776a6fe583ab7b210b0d3ba&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        console.log(body);
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'Today is ' + body.current.weather_descriptions[0] +  '.' + ' It is currently ' + body.current.temperature + '°C degress out. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast