const express = require("express");
const mongoose = require("mongoose");

//letting express framework above node
let AutoMystiq = express();

//connect Server to MongoDB server
async function connect() {
  let connection = await mongoose.connect("mongodb://0.0.0.0:27017/AutoMystiq");
  if (!connection) {
    console.log("Server isnt working");
  } else {
    console.log("Server is Working good !");
  }
}
connect();

//---------------------------------Schema Part & Models------------------------------------------
//-----------------------------------Build Users Schema------------------------------------------

const UserSchema = new mongoose.Schema({
  Username: String,
  Password: String,
  Name: String,
  Age: Number,
  Email: String,
  PhoneNumber: String,
  ProfileImage: String,
  Address: String,
  Gender: String,
  Birth_Date: String,
});

//convert Users to Model
let UserModel = new mongoose.model("Users", UserSchema);

//-----------------------------------End Users Schema---------------------------------------------

//-----------------------------------Build New Cars Schema------------------------------------------

const NCarSchema = new mongoose.Schema({
  CarName: String,
  CarModel: Number,
  CarColor: String,
  PowerHorses: Number,
  Available: Boolean,
  CarImages: String,
  FuelType: String,
  CarBrand: String,
  CarPrice: Number,
});

//convert Cars to Model
let NCarModel = new mongoose.model("New Cars", NCarSchema);

//-----------------------------------End New Cars Schema---------------------------------------------

//-----------------------------------Build Used Cars Schema------------------------------------------

const UCarSchema = new mongoose.Schema({
  CarName: String,
  CarModel: Number,
  CarColor: String,
  PowerHorses: Number,
  CarImages: String,
  PublisherName: String,
  PublisherLocation: String,
  PhoneNumber: String,
  FuelType: String,
  CarBrand: String,
  CarPrice: Number,
});

//convert Cars to Model
let UCarModel = new mongoose.model("Used Cars", UCarSchema);

//----------------------------------End Used Cars Schema----------------------------------------

//----------------------------------Build Services Schema----------------------------------------

const ServiceSchema = new mongoose.Schema({
  ServImages: String,
  ServName: String,
  ServNumber: String,
  ServComments: String,
});

//convert Cars to Model
let ServModel = new mongoose.model("Services", ServiceSchema);

//----------------------------------End Services Schema---------------------------------------
//------------------------------End Schema Part & Models--------------------------------------

//------------------------------------insertion part------------------------------------------

//insert documents in DBs ( Users )
let User1 = new UserModel({
  Username: "AbdallahIBH",
  Password: "Abdallah123@",
  Name: "Abdallah Ibrahim Hashem",
  Age: 20,
  Email: "bodystar106@gmail.com",
  PhoneNumber: "+201286597715",
  ProfileImage:
    "https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg",
  Address: "PortSaid",
  Gender: "male",
  Birth_Date: "26/4/2003",
}).save();

let User2 = new UserModel({
  // User 2 Doesn't have Age - Birthdate -   ProfileImage
  Username: "AhmedAyman",
  Password: "ahmed123ahmed",
  Name: "Ahmed Ayman Yasser",
  Email: "Ahmed123@gmail.com",
  PhoneNumber: "+2013438343",
  Address: "Cairo-ElMohandsen",
  Gender: "Male",
}).save();

let User3 = new UserModel({
  Username: "Menna Mohammed",
  Password: "winner123456@@",
  Name: "Menna Mohammed Youssef",
  Age: 19,
  Email: "mennaexample@gmail.com",
  PhoneNumber: "+2012453525",
  ProfileImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUQQ1WB-rPFc7kEPCGTXGjDMilnxh6osCZ1rZYQuLn6A&s",
  Address: "Ismaillia",
  Gender: "female",
  Birth_Date: "5/7/2004",
}).save();

// Cars Insertion
//new cars
let Ncar1 = new NCarModel({
  CarName: "BMW M5",
  CarModel: 2022,
  CarColor: "Blue",
  PowerHorses: 400,
  Available: true,
  CarImages:
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcarwow-uk-wp-3.imgix.net%2F18015-MC20BluInfinito-scaled-e1666008987698.jpg&tbnid=PaeNVryfumS3CM&vet=12ahUKEwjb17eEq4eDAxXhrycCHUOlB8IQMygFegQIARB9..i&imgrefurl=https%3A%2F%2Fwww.carwow.co.uk%2Fbest%2Fbest-supercars&docid=mi4WKIBBBKYJ4M&w=2560&h=1440&q=CARS&ved=2ahUKEwjb17eEq4eDAxXhrycCHUOlB8IQMygFegQIARB9",
  FuelType: "Petrol",
  CarBrand: "BMW",
  CarPrice: 2000000,
}).save();

let Ncar2 = new NCarModel({
  //without image
  CarName: "BMW 7 Series",
  CarModel: 2023,
  CarColor: "white",
  PowerHorses: 500,
  Available: false,
  FuelType: "Hybird",
  CarBrand: "BMW",
  CarPrice: 4000000,
}).save();

//used cars
let Ucar1 = new UCarModel({
  CarName: "BMW e36",
  CarModel: 2019,
  CarColor: "black",
  PowerHorses: 150,
  CarImages:
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcarwow-uk-wp-3.imgix.net%2F18015-MC20BluInfinito-scaled-e1666008987698.jpg&tbnid=PaeNVryfumS3CM&vet=12ahUKEwjb17eEq4eDAxXhrycCHUOlB8IQMygFegQIARB9..i&imgrefurl=https%3A%2F%2Fwww.carwow.co.uk%2Fbest%2Fbest-supercars&docid=mi4WKIBBBKYJ4M&w=2560&h=1440&q=CARS&ved=2ahUKEwjb17eEq4eDAxXhrycCHUOlB8IQMygFegQIARB9",
  PublisherName: "Menna Ahmed",
  PublisherLocation: "Giza",
  PhoneNumber: "+2014234343",
  FuelType: "Petrol",
  CarBrand: "BMW",
  CarPrice: 700000,
}).save();

let Ucar2 = new UCarModel({
  CarName: "Volkswagen Golf",
  CarModel: 2023,
  CarColor: "grey",
  PowerHorses: 250,
  CarImages:
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcarwow-uk-wp-3.imgix.net%2F18015-MC20BluInfinito-scaled-e1666008987698.jpg&tbnid=PaeNVryfumS3CM&vet=12ahUKEwjb17eEq4eDAxXhrycCHUOlB8IQMygFegQIARB9..i&imgrefurl=https%3A%2F%2Fwww.carwow.co.uk%2Fbest%2Fbest-supercars&docid=mi4WKIBBBKYJ4M&w=2560&h=1440&q=CARS&ved=2ahUKEwjb17eEq4eDAxXhrycCHUOlB8IQMygFegQIARB9",
  PublisherName: "Ahmed Mohsen",
  PublisherLocation: "Cairo",
  PhoneNumber: "+2012313443",
  FuelType: "Gas",
  CarBrand: "Volkswagen",
  CarPrice: 550000,
}).save();

let Serv1 = new ServModel({
  ServImages:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhelpx.adobe.com%2Fphotoshop%2Fusing%2Fconvert-color-image-black-white.html&psig=AOvVaw1PGNbuWDxqsiNOIyYztCKv&ust=1702406514780000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCICozNqEiIMDFQAAAAAdAAAAABAE",
  ServName: "Damaged Tire",
  ServNumber: "+2021331231",
  ServComments: "Services is Wonderful !!",
}).save();

let Serv2 = new ServModel({
  ServImages:
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
  ServName: "Stuck On The Road",
  ServNumber: "+2021331231",
  ServComments: "Services is Good !!",
}).save();

let Serv3 = new ServModel({
  ServImages:
    "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  ServName: "Coming Soon !",
  ServNumber: "Stay Tunned !",
  ServComments: "Write Any Thing",
}).save();

//-------------------------------------End insertion part----------------------------------------

//------------------------------------------Rest APIs--------------------------------------------

//-----------------------------------------------Get---------------------------------------------
//end point to fetch all Users
AutoMystiq.get("/Users", async (req, res) => {
  let allUsers = await UserModel.find();
  res.status(200);
  // Remove this 2 Comments Below to Open the Counter (The Users Counter is Open)
  console.log("Users Counter..");
  console.log(allUsers.length);
  res.json(allUsers);
});

//end point to fetch all New Cars
AutoMystiq.get("/New Cars", async (req, res) => {
  let allNCars = await NCarModel.find();
  res.status(200);
  // Remove this 2 Comments Below to Open the Counter
  // console.log("New Cars Counter..");
  // console.log(allNCars.length);
  res.json(allNCars);
});

//end point to fetch all Used Cars
AutoMystiq.get("/Used Cars", async (req, res) => {
  let allUCars = await UCarModel.find();
  res.status(200);
  // Remove this 2 Comments Below to Open the Counter
  // console.log("Used Cars Counter..");
  // console.log(allUCars.length);
  res.json(allUCars);
});

//end point to fetch all Services
AutoMystiq.get("/Services", async (req, res) => {
  let allServs = await ServModel.find();
  res.status(200);
  // Remove this 2 Comments Below to Open the Counter
  // console.log("Services Comments Counter..");
  // console.log(allServs.length);
  res.json(allServs);
});

//Regular end point return welcome to AutoMystiq
AutoMystiq.get("/", async (req, res) => {
  res.send("Welcome To AutoMystiq Backend Server");
});

//-----------------------------------------------Post---------------------------------------------
//Add New User Via post (Appear In Postman Only)
AutoMystiq.post("/Users", async (req, res) => {
  let NewUser = await UserModel({
    Username: "Michale Anas",
    Password: "moon123@@",
    Name: "Michale Anas Youssef",
    Email: "Moon12345@gmail.com",
    PhoneNumber: "+201123483",
    Address: "Giza",
    Gender: "Male",
  }).save();

  res.status(200);
  res.json("User Has Been Added successfully!!");
});

//Add New NCar Via post (Appear In Postman Only)
AutoMystiq.post("/New Cars", async (req, res) => {
  let NewNCar = await NCarModel({
    CarName: "Mercedes C180",
    CarModel: 2023,
    CarColor: "Red",
    PowerHorses: 340,
    Available: true,
    CarImages:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcarwow-uk-wp-3.imgix.net%2F18015-MC20BluInfinito-scaled-e1666008987698.jpg&tbnid=PaeNVryfumS3CM&vet=12ahUKEwjb17eEq4eDAxXhrycCHUOlB8IQMygFegQIARB9..i&imgrefurl=https%3A%2F%2Fwww.carwow.co.uk%2Fbest%2Fbest-supercars&docid=mi4WKIBBBKYJ4M&w=2560&h=1440&q=CARS&ved=2ahUKEwjb17eEq4eDAxXhrycCHUOlB8IQMygFegQIARB9",
    FuelType: "Petrol",
    CarBrand: "MercedesBenz",
    CarPrice: 5000000,
  }).save();

  res.status(200);
  res.json("Car Has Been Added successfully!!");
});

// listen takes portal(port) - callback function
// ( Control + C ) to Get out of the Server

AutoMystiq.listen(3000, () => {
  console.log("AutoMystiq Server Now Is Ready");
});
