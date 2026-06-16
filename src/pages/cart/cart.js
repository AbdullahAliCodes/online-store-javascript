import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../common/firebase.js";

import "../../common/global.css";
import "./cart.css";

import cartUrl from "../../assets/icons/cart-maroon.svg";

// Cart Icon Image
const cartIconImg = document.querySelector(".cart-icon");
cartIconImg.src = cartUrl;

// Cart Items
const colRef = collection(db, "products");

const cardItemsDiv = document.querySelector(".cart-items");
const cartTotalAmtDiv = document.querySelector(".cart-total-amt");
getDocs(colRef)
  .then((snapshot) => {
    let cartItemsHTML = "";
    let cartTotalAmt = 0;
    snapshot.docs.forEach((doc) => {
      cartItemsHTML += `
        <div class="cart-item">
            <img src="${doc.data().imageURL}" alt="${doc.data().name}" class="cart-prod-img">
            <div class="cart-item-details">
                <span class="cart-prod-desc">${doc.data().name}</span>
                <span class="cart-prod-price">${doc.data().price}</span>
            </div>
            <div class="cart-item-right">
                <button>Delete Item</button>
            </div>
        </div>
        `;
      cartTotalAmt += parseFloat(doc.data().price);
    });
    cardItemsDiv.innerHTML = cartItemsHTML;
    cartTotalAmtDiv.innerHTML = `R ${cartTotalAmt}`;
  })
  .catch((err) => console.log(err));
