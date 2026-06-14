import { auth } from "../../common/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

import "../../common/global.css";
import "./login.css";

import logoUrl from "../../assets/images/logo.svg";
import googleUrl from "../../assets/images/google.svg";
import facebookUrl from "../../assets/images/facebook.svg";

const logoImgs = document.querySelectorAll("form > img");
const socialImgs = document.querySelectorAll(".social-btn > img");

// Load the logo for each query selected above
logoImgs.forEach((img) => {
  img.src = logoUrl;
});
// Even Indexes = Google; Odd Indexes = Facebook
socialImgs.forEach((img, index) => {
  if (index % 2 === 0) {
    img.src = googleUrl; // Indexes 0 and 2
  } else {
    img.src = facebookUrl; // Indexes 1 and 3
  }
});

// Toggle between Login & Signup
const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".sign-up-form");
const toSignup = document.getElementById("to-signup");
const toLogin = document.getElementById("to-login");

toSignup.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "none";
  signupForm.style.display = "flex";
});

toLogin.addEventListener("click", (e) => {
  e.preventDefault();
  signupForm.style.display = "none";
  loginForm.style.display = "flex";
});

// Signing up a user
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signupForm.email.value;
  const password = signupForm.password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log("User Created: ", cred.user);
      signupForm.requestFullscreen();
    })
    .catch((err) => {
      console.log(err.message);
    });
});
