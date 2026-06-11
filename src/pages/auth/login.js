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
