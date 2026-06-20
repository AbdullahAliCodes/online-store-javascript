import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";

const currentPath = window.location.pathname;

// --------- HANDLING IMAGES (WEBPACK) ---------
import logoUrl from "../assets/images/urban-threads-cream.svg";
import cartUrl from "../assets/icons/cart.svg";

const logoImg = document.querySelector(".our-logo");
logoImg.src = logoUrl;

const cartIcon = document.getElementById("cart-icon");
cartIcon.src = cartUrl;
// ----------------------------------------------

// ----------- Logo --> Home Page -----------
logoImg.addEventListener("click", () => {
  if (currentPath !== "/" && currentPath !== "/index.html") {
    window.location.href = "/";
  }
});

// ----------- PAGES | NAV-ITEMS -----------
const navHome = document.getElementById("nav-home");
const navProducts = document.getElementById("nav-products");
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
  navHome.style.backgroundColor = "beige";
  navHome.style.color = "maroon";
  navHome.style.borderRadius = "5px";
}
if (currentPath === "/shop.html") {
  navProducts.style.backgroundColor = "beige";
  navProducts.style.color = "maroon";
  navProducts.style.borderRadius = "5px";
}

// ----------- CART -----------
const cartBtn = document.getElementById("cart-btn");
cartBtn.addEventListener("click", () => {
  window.location.href = "/cart.html";
});

// ----------- LOGOUT -----------
const logInBtn = document.getElementById("log-in-btn");
const logOutBtn = document.getElementById("log-out-btn");

onAuthStateChanged(auth, (user) => {
  if (user) {
    cartBtn.style.display = "block";
    logOutBtn.style.display = "block";
    logInBtn.style.display = "none";
  } else {
    cartBtn.style.display = "none";
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

// Log in / Log out styling
const logInOutBtn = document.querySelector(".login-out-btn");
const logInText = document.getElementById("log-in-btn");
const logOutText = document.getElementById("log-out-btn");
logInOutBtn.addEventListener("mouseenter", () => {
  logInOutBtn.style.backgroundColor = "beige";
  logInOutBtn.style.transition = "0.3s";
  logInText.style.color = "maroon";
  logOutText.style.color = "maroon";
});
logInOutBtn.addEventListener("mouseleave", () => {
  logInOutBtn.style.backgroundColor = "maroon";
  logInOutBtn.style.transition = "1s";
  logInText.style.color = "beige";
  logOutText.style.color = "beige";
});
