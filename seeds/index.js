
const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

mongoose.connect('mongodb://localhost:27017/redpanda-camp', {
    //useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const camp = new Campground({
            author: '624c79e4ba45b221dae28680',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            // image: 'https://source.unsplash.com/collection/45967841',
            description: 'Cutest animal in the world!',
            zoo: '',
            geometry: { 
                type: 'Point', 
                coordinates: [ -71.0596, 42.3605 ] 
            },
            images: [
                {
                  url: 'https://res.cloudinary.com/dzvbiofv3/image/upload/v1649286315/RedPandaCamp/pvt52eizh4gmenokywh7.jpg',
                  filename: 'RedPandaCamp/pvt52eizh4gmenokywh7'
                  
                },
                {
                  url: 'https://res.cloudinary.com/dzvbiofv3/image/upload/v1649286315/RedPandaCamp/esphynx4ifgted8pmdia.jpg',
                  filename: 'RedPandaCamp/esphynx4ifgted8pmdia'
                  
                }
              ]
        })
        await camp.save();
    }
}

seedDB();

seedDB().then(() => {
    mongoose.connection.close();
})

