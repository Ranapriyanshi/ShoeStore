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
    image:
      "https://images.unsplash.com/photo-1603808033192-082d6919d7f2?auto=format&fit=crop&w=400",
    features: ["Cushioned sole", "Retro style", "Breathable mesh"],
    saleStatus: "featured",
    description:
      "A timeless classic with modern cushioning. Perfect blend of comfort and street style.",
  },
  {
    name: "Ultraboost 21",
    brand: "Adidas",
    price: 180,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1618354691373-8d7f5b77a6d2?auto=format&fit=crop&w=400",
    features: ["Boost midsole", "Primeknit upper", "Energy return"],
    saleStatus: "new",
    description:
      "Maximum comfort and performance for runners. Responsive design with all-day support.",
  },
  {
    name: "Gel-Kayano 28",
    brand: "ASICS",
    price: 160,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?auto=format&fit=crop&w=400",
    features: ["Stability support", "Gel cushioning", "Durable outsole"],
    saleStatus: "sale",
    description:
      "Engineered for overpronators with premium gel comfort. Built for endurance and support.",
  },
  {
    name: "Chuck Taylor All Star",
    brand: "Converse",
    price: 65,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1585386959984-a41552262b4d?auto=format&fit=crop&w=400",
    features: ["Canvas upper", "Iconic design", "Rubber sole"],
    saleStatus: "featured",
    description:
      "An iconic sneaker for everyday style. Timeless look with unmatched versatility.",
  },
  {
    name: "ZoomX Vaporfly Next%",
    brand: "Nike",
    price: 250,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1603398399795-d36cb174f7aa?auto=format&fit=crop&w=400",
    features: ["Carbon plate", "ZoomX foam", "Race-ready"],
    saleStatus: "new",
    description:
      "Elite racing shoe for serious runners. Unmatched speed, bounce, and energy return.",
  },
  {
    name: "NMD_R1",
    brand: "Adidas",
    price: 140,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1618354691611-c5e8f89c3d4a?auto=format&fit=crop&w=400",
    features: ["Sock-like fit", "Boost midsole", "Streetwear look"],
    saleStatus: "sale",
    description:
      "Sleek and comfy street sneakers. Inspired by retro tech with modern vibes.",
  },
  {
    name: "Clifton 8",
    brand: "Hoka One One",
    price: 130,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1618354692043-02a0c763f9a5?auto=format&fit=crop&w=400",
    features: ["Meta-Rocker", "Lightweight cushion", "Plush ride"],
    saleStatus: "featured",
    description:
      "Feather-light performance for distance runs. Smooth transitions and soft landings.",
  },
  {
    name: "Old Skool",
    brand: "Vans",
    price: 70,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1617229905995-fd860f7b1df4?auto=format&fit=crop&w=400",
    features: ["Suede and canvas", "Skate durability", "Waffle sole"],
    saleStatus: "sale",
    description:
      "Classic skate shoe with heritage vibes. Durable, stylish, and everyday-ready.",
  },
  {
    name: "FuelCell Rebel v2",
    brand: "New Balance",
    price: 130,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1624378439575-6c585b6d1f07?auto=format&fit=crop&w=400",
    features: ["FuelCell foam", "Lightweight", "Daily trainer"],
    saleStatus: "new",
    description:
      "Explosive energy return in every step. Built for runners who love speed and comfort.",
  },
  {
    name: "Pegasus 40",
    brand: "Nike",
    price: 130,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1585386959984-a41552262b4d?auto=format&fit=crop&w=400",
    features: ["React foam", "Durable outsole", "Breathable upper"],
    saleStatus: "featured",
    description:
      "Everyday trainer for any distance. Reliable comfort with a responsive ride.",
  },
];


async function seed() {
  await Shoe.deleteMany({});
  await Shoe.insertMany(sampleShoes);
  console.log("Database seeded!");
  mongoose.disconnect();
}

seed();
