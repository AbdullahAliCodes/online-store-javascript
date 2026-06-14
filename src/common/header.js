import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";

// --------- HANDLING IMAGES (WEBPACK) ---------
import logoUrl from "../assets/images/urban-threads-cream.svg";
import cartUrl from "../assets/icons/cart.svg";

const logoImg = document.querySelector(".our-logo");
logoImg.src = logoUrl;

const cartIcon = document.getElementById("cart-icon");
cartIcon.src = cartUrl;

// ----------- Logo --> Home Page -----------
logoImg.addEventListener("click", () => {
  console.log(window.location.href);
  //   if (window.location.href !== "/") {
  //     window.location.href = "/";
  //   }
});

// ----------- PAGES | NAV-ITEMS -----------
const navHome = document.getElementById("nav-home");
const navProducts = document.getElementById("nav-products");
const currentPath = window.location.pathname;
navHome.addEventListener("click", () => {
  if (currentPath !== "/" && currentPath !== "/index.html") {
    window.location.href = "/";
  }
});
navProducts.addEventListener("click", () => {
  if (currentPath !== "/shop.html") {
    window.location.href = "/shop.html";
  }
});

// ----------- Active Navbar Items -----------
if (currentPath === "/" || currentPath === "/index.html") {
  navHome.style.textDecoration = "underline wavy white 3px";
}
if (currentPath === "/shop.html") {
  navProducts.style.textDecoration = "underline wavy white 3px";
}

// ----------- CART -----------
const cartBtn = document.getElementById("cart-btn");

// ----------- LOGOUT -----------
const logInBtn = document.getElementById("log-in-btn");
const logOutBtn = document.getElementById("log-out-btn");

onAuthStateChanged(auth, (user) => {
  if (user) {
    logOutBtn.style.display = "block";
    logInBtn.style.display = "none";
  } else {
    logInBtn.style.display = "block";
    logOutBtn.style.display = "none";
  }
});

logOutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      window.location.href = "/login.html";
      console.log("User has been signed out");
    })
    .catch((err) => {
      console.log(err.message);
    });
});
