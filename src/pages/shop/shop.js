import { collection, getDocs, getDoc } from "firebase/firestore";
import { db } from "../../common/firebase.js";

import "../../common/global.css";
import "./shop.css";

// let products = [
//   {
//     name: "Oversized Hoodie",
//     price: 49.99,
//     category: "Hoodies",
//     description: "Soft cotton hoodie in oversized fit.",
//     imageURL: "https://example.com/hoodie.jpg",
//   },
//   {
//     name: "Classic Zip Hoodie",
//     price: 54.99,
//     category: "Hoodies",
//     description: "Mid-weight fleece with full zip and kangaroo pockets.",
//     imageURL: "https://example.com/zip-hoodie.jpg",
//   },
//   {
//     name: "Graphic Tee",
//     price: 24.99,
//     category: "T-Shirts",
//     description: "100% cotton tee with screen-printed front graphic.",
//     imageURL: "https://example.com/graphic-tee.jpg",
//   },
//   {
//     name: "Essential Crew Neck",
//     price: 19.99,
//     category: "T-Shirts",
//     description: "Plain crew neck tee, pre-shrunk jersey cotton.",
//     imageURL: "https://example.com/crew-tee.jpg",
//   },
//   {
//     name: "Slim Fit Jeans",
//     price: 69.99,
//     category: "Pants",
//     description: "Stretch denim slim fit with five-pocket styling.",
//     imageURL: "https://example.com/slim-jeans.jpg",
//   },
//   {
//     name: "Cargo Joggers",
//     price: 44.99,
//     category: "Pants",
//     description: "Tapered joggers with side cargo pockets and elastic cuffs.",
//     imageURL: "https://example.com/cargo-joggers.jpg",
//   },
//   {
//     name: "Windbreaker Jacket",
//     price: 79.99,
//     category: "Jackets",
//     description: "Lightweight water-resistant shell with packable hood.",
//     imageURL: "https://example.com/windbreaker.jpg",
//   },
//   {
//     name: "Denim Trucker Jacket",
//     price: 89.99,
//     category: "Jackets",
//     description: "Stone-washed denim jacket with metal button closure.",
//     imageURL: "https://example.com/denim-jacket.jpg",
//   },
//   {
//     name: "Running Sneakers",
//     price: 99.99,
//     category: "Shoes",
//     description: "Breathable mesh upper with cushioned foam midsole.",
//     imageURL: "https://example.com/running-sneakers.jpg",
//   },
//   {
//     name: "Canvas Low Tops",
//     price: 59.99,
//     category: "Shoes",
//     description: "Classic vulcanized sole canvas sneakers in everyday colors.",
//     imageURL: "https://example.com/canvas-sneakers.jpg",
//   },
//   {
//     name: "Wool Beanie",
//     price: 14.99,
//     category: "Accessories",
//     description: "Ribbed knit beanie, one size fits most.",
//     imageURL: "https://example.com/beanie.jpg",
//   },
// ];

// const productList = document.getElementById("products-list");

// products.forEach((product) => {
//   const li = document.createElement("li");
//   li.textContent = product.name;
//   productList.append(li);
// });

const colRef = collection(db, "products");

getDocs(colRef)
  .then((snapshot) => {
    let products = [];
    snapshot.docs.forEach((doc) => {
      products.push({ ...doc.data(), id: doc.id });
    });
    console.log(products);
  })
  .catch((err) => {
    console.log(err.message);
  });
