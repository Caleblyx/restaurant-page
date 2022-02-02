import {initializeAboutUsPage} from "./aboutus.js";
import { initializeMenu } from "./menu.js";
import { initializeContact } from "./findus.js";
import {transition} from "./transition.js";
import "./style.css";
import drumstick from "./images/fried-chicken-drumstick.png";
import chickenIcon from "./images/icon.png";

const head = document.querySelector("head");
const icon = document.createElement("link");
icon.rel = "icon";
icon.type = "image/x-icon";
icon.href = chickenIcon;
head.appendChild(icon);


const contentDiv = document.getElementById("content");
const header = document.createElement("header");
header.textContent = "Fried Chickies";
contentDiv.appendChild(header);
const drumstickIcon = new Image();
drumstickIcon.classList.add("drumstick");
drumstickIcon.src = drumstick;


const tabBrowser = document.createElement("div");
tabBrowser.classList.add("tab-browser");
const aboutUsTab = document.createElement("div");
aboutUsTab.textContent = "ABOUT US";
aboutUsTab.classList.add("tab");
const menuTab = document.createElement("div");
menuTab.textContent = "OUR MENU";
menuTab.classList.add("tab");
const findUsTab = document.createElement("div");
findUsTab.textContent = "FIND US";
findUsTab.classList.add("tab");

tabBrowser.appendChild(aboutUsTab);
tabBrowser.appendChild(menuTab);
tabBrowser.appendChild(findUsTab);
header.appendChild(tabBrowser);
header.appendChild(drumstickIcon);

const pageContent = document.createElement("div");
pageContent.classList.add("page-content");
contentDiv.appendChild(pageContent);

aboutUsTab.classList.add("tab-selected");

aboutUsTab.addEventListener("click", e=>{transition(e,initializeAboutUsPage)});
menuTab.addEventListener("click", e=>{transition(e,initializeMenu)});
findUsTab.addEventListener("click", e=>{transition(e,initializeContact)});

initializeAboutUsPage();

