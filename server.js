'use strict';

const PORT = 3000; 


const express = require('express'); 
const cors = require('cors'); 

const app = express(); 

app.use(cors()); 


app.get('/location', handleLocation);



function handleLocation(request, response) {
    
    const getLocation = require('./data/location.json');
    console.log("city---->", city);
    let obj = {
        name: getLocation[0].display_name,
        formatted_query: city,
        city : city,
        latitude: getLocation[0].lat,
        longitude: getLocation[0].lon
    };
 
    response.send(obj);
}


 
app.listen(PORT, ()=> console.log(`App is running on Server on port: ${PORT}`))