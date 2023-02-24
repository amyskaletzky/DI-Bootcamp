// Exercise 1 : Location
// Instructions
// Analyze the code below.What will be the output ?
const person = {
    username: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const { username, location: { country, city, coordinates: [lat, lng] } } = person;

console.log(`I am ${username} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

