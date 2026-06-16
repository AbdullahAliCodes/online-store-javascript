import { collection, getDocs } from "firebase/firestore";
import { db } from "../../common/firebase.js";

import "../../common/global.css";
import "./shop.css";

import cartIcon from "../../assets/icons/cart-maroon.svg";

const productList = document.getElementById("products");

const colRef = collection(db, "products");

getDocs(colRef)
  .then((snapshot) => {
    let products = [];
    let productCardsHTML = "";
    snapshot.docs.forEach((doc) => {
      products.push({ ...doc.data(), id: doc.id });
      productCardsHTML += `
      <div class="product-card">
        <img src="${doc.data().imageURL}" class="product-image" />
        <h2>${doc.data().name}</h2>
        <p class="prod-desc">${doc.data().description}</p>
        <p class="prod-card-footer">
          <span>R ${doc.data().price}</span>
          <span>
            <button class="add-to-cart-btn">
              <span class="add-icons">
                +
                <img src="${cartIcon}" class="add-to-cart-icon" />              
              </span>
              <span>Add to Cart</span>
            </button>
          </span>
        </p>
      </div>`;
    });
    console.log(products);
    productList.innerHTML += productCardsHTML;
  })
  .catch((err) => {
    console.log(err.message);
  });
