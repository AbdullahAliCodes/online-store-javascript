import { db, auth } from "../../common/firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, setDoc, doc } from "firebase/firestore";

import "../../common/global.css";
import "./shop.css";

import cartUrl from "../../assets/icons/cart-maroon.svg";
import priceTagUrl from "../../assets/icons/price-tag.svg";

// Products Page Header
const priceTagImg = document.querySelector(".price-tag-icon");
priceTagImg.src = priceTagUrl;

const productsColRef = collection(db, "products");
const productList = document.getElementById("products");

onSnapshot(productsColRef, (snapshot) => {
  let products = [];
  productList.innerHTML = "";
  let productCardsHTML = "";
  snapshot.docs.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id });
    productCardsHTML += `
    <div class="product-card" >
      <img src="${doc.data().imageURL}" class="product-image" />
      <h3>${doc.data().name}</h3>
      <p class="prod-desc">${doc.data().description}</p>
      <p class="prod-card-footer">
        <span>R ${doc.data().price}</span>
        <span>
          <button class="add-to-cart-btn" data-id="${doc.id}">
            <span class="add-icons">
              +
              <img src="${cartUrl}" class="add-to-cart-icon" />              
            </span>
            <span class="add-to-cart-text">Add to Cart</span>
          </button>
        </span>
      </p>
    </div>`;
  });
  console.log(products);
  productList.innerHTML += productCardsHTML;
});

// Handle Add To Cart
productList.addEventListener("click", async (event) => {
  const clickedButton = event.target.closest(".add-to-cart-btn");

  if (clickedButton) {
    clickedButton.disabled = true;

    const addToCartBtnText = event.target.closest(".add-to-cart-text");
    if (addToCartBtnText) {
      addToCartBtnText.innerHTML = "<strong>Adding...</strong>";
    }

    try {
      const user = auth.currentUser;

      if (user) {
        const clickedDocId = event.target.getAttribute("data-id");

        await setDoc(
          doc(db, "carts", `${user.uid}`),
          {
            [clickedDocId]: clickedDocId,
          },
          { merge: true },
        );

        console.log(`Added to cart: ${clickedDocId}`);
        console.log(`For user: ${user.uid}`);

        if (addToCartBtnText) {
          addToCartBtnText.innerHTML = "<strong>Added!</strong>";
        }
      } else {
        window.location.href = "/login.html";
      }
    } catch (error) {
      console.log("Something went wrong:" + error);
      if (addToCartBtnText) {
        addToCartBtnText.innerHTML = "<strong>Error!</strong>";
      }
    } finally {
      clickedButton.disabled = false;
    }
  }
});
