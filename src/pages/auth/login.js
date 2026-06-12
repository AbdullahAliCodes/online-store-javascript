import { auth } from "../../common/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

import "../../common/global.css";
import "./login.css";

import logoUrl from "../../assets/images/logo.svg";
import googleUrl from "../../assets/images/google.svg";
import facebookUrl from "../../assets/images/facebook.svg";

const logoImg = document.querySelector("form > img");
const socialImgs = document.querySelectorAll(".social-btn > img");

logoImg.src = logoUrl;
socialImgs[0].src = googleUrl;
socialImgs[1].src = facebookUrl;

// Signing up a user
const signupForm = document.querySelector(".sign-up");
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
