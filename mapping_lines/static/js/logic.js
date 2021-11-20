// Add console.log to check to see if our code is working.
console.log("working");


// Create the map object with a center and zoom level. (Recenter setview as points change)
// 1. Change the zoom to 7 in setView()
let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// ///// Mapping Lines (Single Line)
// // 2. Add the code for the line variable
// // Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790]
//   ]; 
// // Making one line between two endpoints
// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "red"
//   }).addTo(map);  

// // Get data from cities.js
// let cityData = cities;

//Mapping Multiple Lines (refactored from above)
// 1. Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ]; 
// 2. Create a polyline using the line coordinates and make the line yellow. Change the map style to"satellite-streets-v11." from leaflet 
L.polyline(line, {
    color: "yellow"
 }).addTo(map);

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Get data from cities.js
let cityData = cities;

// Adding markers to the map
// 1. Add the location of each city on the map using the marker() function and for loop
// 2. Loop through the cities array and create one marker for each city
// 3. Add a pop up marker for each marker using bindPopup() method 
// 4. Format population by chaining 'city.population' to '.toLocaleString()'
// 5. Replace the circle function with circleMarker to add more cicle attributes // Adjust the radius decrease each city's radius to fit (city.population/100000)
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});

/// Iterate through the array of cities to add each marker on the map
// Loop through the cities array and create one marker for each city.
cities.forEach(function(city) {
    console.log(city)
   });  


// We create the tile layer that will be the background of our map.

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);