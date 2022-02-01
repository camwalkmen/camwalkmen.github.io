if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY
const axios = require('axios')
const express = require('express')
const app = express()


/* Sending JSON to our server using public as a best practice */
app.use(express.json())
app.use(express.static('public'))

/* This endpoint will get the weather from API */
app.post('/weather', (req, res) => {
	const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${req.body.latitude}&lon=${req.body.longitude}&exclude=hourly,minutely&units=imperial&appid=${OPENWEATHER_API_KEY}`
	axios({
		url: url,
		responseType: 'json'
	}).then(data => res.json(data.data.current))
})

/* Calls server on port 3000 */
app.listen(3000, () => {
	console.log('Server started')
})

/* IMPORTANT to test if everything is running by going into
command prompt and running 'npm run devStart' */

