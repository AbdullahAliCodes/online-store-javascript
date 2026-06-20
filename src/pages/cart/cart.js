import { collection, getDocs, addDoc, onSnapshot } from "firebase/firestore";
import { db, auth } from "../../common/firebase.js";
import { onAuthStateChanged } from "firebase/auth";

import "../../common/global.css";
import "./cart.css";

import cartUrl from "../../assets/icons/cart-maroon.svg";

// Cart Icon Image
const cartIconImg = document.querySelector(".cart-icon");
cartIconImg.src = cartUrl;

// Cart Items
const cartColRef = collection(db, "carts");
const productsColRef = collection(db, "products");

const cartItemsDiv = document.querySelector(".cart-items");
const cartTotalAmtDiv = document.querySelector(".cart-total-amt");

onAuthStateChanged(auth, (user) => {
  if (user) {
  } else {
    window.location.href = "/login.html";
  }
});

const cartItemsArr = [];
onSnapshot(cartColRef, (snapshot) => {
  snapshot.docs.forEach((doc) => {
    for (const [key, value] of Object.entries(doc.data())) {
      cartItemsArr.push(key);
    }
  });
});

getDocs(productsColRef)
  .then((snapshot) => {
    let cartItemsHTML = "";
    let cartTotalAmt = 0;
    cartItemsArr.forEach((cartItem) => {
      snapshot.docs.forEach((doc) => {
        if (doc.id === cartItem) {
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
        }
      });
      cartItemsDiv.innerHTML = cartItemsHTML;
      cartTotalAmtDiv.innerHTML = `R ${cartTotalAmt}`;
    });
  })
  .catch((err) => console.log(err));
