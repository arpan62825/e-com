// import { v4 as uuidv4 } from "uuid";

// going by relative route, giving the route to the image as "../assets/images/product-images/model-showcase-1" should have worked. as both the products.js and SearchPage.jsx are at the same tree-level. but for some reason, the path must start with ..... WHY?

import img1 from "../assets/images/product-images/model-showcase-1.jpeg";
import img2 from "../assets/images/product-images/model-showcase-2.jpeg";
import img3 from "../assets/images/product-images/model-showcase-3.jpeg";
import img4 from "../assets/images/product-images/model-showcase-4.jpeg";
import img5 from "../assets/images/product-images/model-showcase-5.jpeg";
import img6 from "../assets/images/product-images/model-showcase-6.jpeg";
import img7 from "../assets/images/product-images/model-showcase-7.jpeg";
import img8 from "../assets/images/product-images/model-showcase-8.jpeg";
import img9 from "../assets/images/product-images/model-showcase-9.jpeg";
import img10 from "../assets/images/product-images/model-showcase-10.jpeg";
import img11 from "../assets/images/product-images/model-showcase-11.jpeg";
import img12 from "../assets/images/product-images/model-showcase-12.jpeg";
import img13 from "../assets/images/product-images/model-showcase-13.jpeg";
import img14 from "../assets/images/product-images/model-showcase-14.jpeg";
import img15 from "../assets/images/product-images/model-showcase-15.jpeg";
import img16 from "../assets/images/product-images/model-showcase-16.jpeg";
import img17 from "../assets/images/product-images/model-showcase-17.jpeg";
import img18 from "../assets/images/product-images/model-showcase-18.jpeg";
import img19 from "../assets/images/product-images/model-showcase-19.jpeg";
import img20 from "../assets/images/product-images/model-showcase-20.jpeg";

const products = [
  {
    title: `Organic Cotton Crewneck Jacket`,
    id: `550e8400-e29b-41d4-a716-446655440000`,
    price: 79.99,
    description: `Made from 100% organic cotton with a classic fit and soft lining.`,
    image: img1,
  },
  {
    title: `Bamboo Performance Jacket`,
    id: `550e8400-e29b-41d4-a716-446655440001`,
    price: 85.99,
    description: `Breathable and moisture-wicking bamboo fabric, perfect for active wear.`,
    image: img2,
  },
  {
    title: `Recycled Polyester Sports Jacket`,
    id: `550e8400-e29b-41d4-a716-446655440002`,
    price: 75.5,
    description: `Lightweight and sustainable sportswear made from recycled bottles.`,
    image: img3,
  },
  {
    title: `Hemp Everyday Jacket`,
    id: `550e8400-e29b-41d4-a716-446655440003`,
    price: 90.0,
    description: `Soft and durable hemp blend for everyday wear.`,
    image: img4,
  },
  {
    title: `Fair Trade Cotton Pocket Jacket`,
    id: `550e8400-e29b-41d4-a716-446655440004`,
    price: 82.75,
    description: `Ethically made cotton jacket with a stylish pocket.`,
    image: img5,
  },
  {
    title: `Organic Linen Relaxed Jacket`,
    id: `550e8400-e29b-41d4-a716-446655440005`,
    price: 99.99,
    description: `Lightweight organic linen with a relaxed fit.`,
    image: img6,
  },
  {
    title: `Vegan Silk Luxe Jacket`,
    id: `550e8400-e29b-41d4-a716-446655440006`,
    price: 105.99,
    description: `Ultra-soft vegan silk with a premium feel.`,
    image: img7,
  },
  {
    title: `Sustainable Dye Oversized Jacket`,
    id: `550e8400-e29b-41d4-a716-446655440007`,
    price: 97.99,
    description: `Eco-friendly dyed oversized jacket for a modern look.`,
    image: img8,
  },
  {
    title: `Minimalist Embroidered Logo Jacket`,
    id: `550e8400-e29b-41d4-a716-446655440008`,
    price: 104.5,
    description: `Subtle embroidered logo on an organic cotton base.`,
    image: img9,
  },
  {
    title: `Eco-Friendly Graphic Print Jacket`,
    id: `550e8400-e29b-41d4-a716-446655440009`,
    price: 98.99,
    description: `Sustainable printing techniques with unique designs.`,
    image: img10,
  },
  {
    title: `Biodegradable Modal Jacket`,
    id: `550e8400-e29b-41d4-a716-446655440010`,
    price: 107.25,
    description: `Made from biodegradable modal fabric, super soft and breathable.`,
    image: img11,
  },
  {
    title: `Upcycled Cotton Patchwork Jacket`,
    id: `550e8400-e29b-41d4-a716-446655440011`,
    price: 99.49,
    description: `Patchwork design using leftover cotton fabrics.`,
    image: img12,
  },
  {
    title: `Waterless Dyed Classic Jacket`,
    id: `550e8400-e29b-41d4-a716-446655440012`,
    price: 86.99,
    description: `Uses innovative dyeing techniques that require no water.`,
    image: img13,
  },
  {
    title: `Plant-Based Performance Jacket`,
    id: `550e8400-e29b-41d4-a716-446655440013`,
    price: 108.99,
    description: `High-performance material derived from plant fibers.`,
    image: img14,
  },
  {
    title: `Organic Wool Blend Winter Jacket`,
    id: `550e8400-e29b-41d4-a716-446655440014`,
    price: 112.0,
    description: `Organic wool-cotton blend for extra warmth.`,
    image: img15,
  },
  {
    title: `Reversible Sustainable Jacket`,
    id: `550e8400-e29b-41d4-a716-446655440015`,
    price: 98.75,
    description: `Two-in-one reversible jacket with eco-friendly materials.`,
    image: img16,
  },
  {
    title: `Zero-Waste Knitted Jacket`,
    id: `550e8400-e29b-41d4-a716-446655440016`,
    price: 110.99,
    description: `Designed with zero fabric waste using advanced knitting techniques.`,
    image: img17,
  },
  {
    title: `Certified Carbon-Neutral Jacket`,
    id: `550e8400-e29b-41d4-a716-446655440017`,
    price: 89.89,
    description: `Fully carbon-neutral production and shipping.`,
    image: img18,
  },
  {
    title: `Regenerative Cotton Jacket`,
    id: `550e8400-e29b-41d4-a716-446655440018`,
    price: 106.5,
    description: `Cotton sourced from regenerative farms for healthier soil.`,
    image: img19,
  },
  {
    title: `Natural Indigo Dyed Jacket`,
    id: `550e8400-e29b-41d4-a716-446655440019`,
    price: 87.49,
    description: `Dyed with real indigo for a timeless blue shade.`,
    image: img20,
  },
];

export default products;
