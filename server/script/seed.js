const mongoose = require("mongoose");
const Shoe = require("../models/Shoe");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const sampleShoes = [
  {
    name: "Air Max 90",
    brand: "Nike",
    price: 120,
    rating: 4.5,
    image: "https://via.placeholder.com/150?text=Air+Max+90",
    features: ["Cushioned sole", "Retro style", "Breathable mesh"],
  },
  {
    name: "Ultraboost 21",
    brand: "Adidas",
    price: 180,
    rating: 4.8,
    image: "https://via.placeholder.com/150?text=Ultraboost+21",
    features: ["Boost midsole", "Primeknit upper", "Energy return"],
  },
  {
    name: "Gel-Kayano 28",
    brand: "ASICS",
    price: 160,
    rating: 4.6,
    image: "https://via.placeholder.com/150?text=Gel-Kayano+28",
    features: ["Stability support", "Gel cushioning", "Durable outsole"],
  },
];

async function seed() {
  await Shoe.deleteMany({});
  await Shoe.insertMany(sampleShoes);
  console.log("Database seeded!");
  mongoose.disconnect();
}

seed();
