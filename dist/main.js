/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/aboutus.js":
/*!************************!*\
  !*** ./src/aboutus.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeAboutUsPage": () => (/* binding */ initializeAboutUsPage)
/* harmony export */ });
/* harmony import */ var _images_flat_fried_chicken_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/flat-fried-chicken.jpg */ "./src/images/flat-fried-chicken.jpg");


function initializeAboutUsPage() {
    const pageContentDiv = document.querySelector(".page-content");
    const aboutUsFirst = document.createElement("div");
    aboutUsFirst.classList.add("about-us-first");
    const aboutUsFirstMess = document.createElement("div")
    const aboutUsFirstTitle = document.createElement("div");
    const aboutUsFirstCaption = document.createElement("div");
    aboutUsFirstMess.classList.add("about-us-first-message");
    aboutUsFirstTitle.classList.add("about-us-title");
    aboutUsFirstCaption.classList.add("about-us-caption");
    aboutUsFirstTitle.textContent = "More than just fried chicken";
    aboutUsFirstCaption.textContent ="At Fried Chickies, we pride ourselves with delivering the best experiences to our customers by offering specialty fried chicken with recipes derived from different cuisines. Check out our menu to learn more about what we have!"

    aboutUsFirstMess.appendChild(aboutUsFirstTitle);
    aboutUsFirstMess.appendChild(aboutUsFirstCaption);
    const trayOfChicken = new Image();
    trayOfChicken.src = _images_flat_fried_chicken_jpg__WEBPACK_IMPORTED_MODULE_0__;
    trayOfChicken.classList.add("tray-of-chicken");
    
    aboutUsFirst.appendChild(aboutUsFirstMess);
    aboutUsFirst.appendChild(trayOfChicken);
    pageContentDiv.appendChild(aboutUsFirst);
    pageContentDiv.style.animation = "fade-in 0.5s";

}




/***/ }),

/***/ "./src/findus.js":
/*!***********************!*\
  !*** ./src/findus.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeContact": () => (/* binding */ initializeContact)
/* harmony export */ });
function initializeContact() {
    const pageContentDiv = document.querySelector(".page-content");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.textContent = "So, what are you waiting for?"
    pageContentDiv.appendChild(messageDiv);

    const findUsDiv = document.createElement("div");
    findUsDiv.classList.add("find-us"); 
    const map = document.createElement("iframe");
    map.classList.add("map");
    map.src = "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJnXwAOKAZ2jERAs-MHs1aDgI&key=AIzaSyAgQWwlt3zoQomCE3JQrw4Vuu9o-CzIXoM";


    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");
    const firstTitle = document.createElement("div");
    firstTitle.classList.add("contact-info-title");
    const firstCaption = document.createElement("div");
    firstCaption.classList.add("contact-info-caption");
    const secondCaption = document.createElement("div");
    secondCaption.classList.add("contact-info-caption");
    const thirdCaption = document.createElement("div");
    thirdCaption.classList.add("contact-info-caption");
    firstTitle.textContent = "Find Us"
    firstCaption.textContent = "Location: 3 River Valley Rd, Singapore 179024"
    secondCaption.textContent = "Phone Number: +65 0000 0000";
    thirdCaption.textContent = "Opening Hours: Mon - Saturday, 11:00 AM to 12:00 PM";
    contactInfo.appendChild(firstTitle);
    contactInfo.appendChild(firstCaption);
    contactInfo.appendChild(secondCaption);
    contactInfo.appendChild(thirdCaption);

    findUsDiv.appendChild(map);
    findUsDiv.appendChild(contactInfo);
    pageContentDiv.appendChild(findUsDiv);

    pageContentDiv.style.animation = "fade-in 0.5s";
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeMenu": () => (/* binding */ initializeMenu)
/* harmony export */ });
/* harmony import */ var _images_classic_fried_chicken_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/classic-fried-chicken.jpg */ "./src/images/classic-fried-chicken.jpg");
/* harmony import */ var _images_flaming_fried_chicken_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/flaming-fried-chicken.jpeg */ "./src/images/flaming-fried-chicken.jpeg");
/* harmony import */ var _images_saucy_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/saucy.jpg */ "./src/images/saucy.jpg");
/* harmony import */ var _images_karaage_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/karaage.jpg */ "./src/images/karaage.jpg");
/* harmony import */ var _images_prawn_paste_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/prawn-paste.jpg */ "./src/images/prawn-paste.jpg");
/* harmony import */ var _images_herbaceous_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/herbaceous.jpg */ "./src/images/herbaceous.jpg");







function initializeMenu() {
    const pageContentDiv = document.querySelector(".page-content");
    const speciality = document.createElement("div");
    const specialityTitle = document.createElement("div");
    const specialityItems = document.createElement("div");
    speciality.classList.add("menu");
    specialityTitle.classList.add("menu-title");
    specialityItems.classList.add("menu-items");
    specialityTitle.textContent = "Specialities";

    const classicCard = createMenuItem("The Classic", _images_classic_fried_chicken_jpg__WEBPACK_IMPORTED_MODULE_0__, "Classic, mouth-watering, crunchy fried chicken featuring our proprietary blend of herbs and spices.");
    specialityItems.appendChild(classicCard);
    const flamingCard = createMenuItem("The Flame", _images_flaming_fried_chicken_jpeg__WEBPACK_IMPORTED_MODULE_1__, "Looking for a kick? This is our spiciest item on the menu.");
    specialityItems.appendChild(flamingCard);
    const saucyCard = createMenuItem("The Sauciest", _images_saucy_jpg__WEBPACK_IMPORTED_MODULE_2__, "Sweet and savoury, this dish takes its inspirations from Korean fried chicken.");
    specialityItems.appendChild(saucyCard);
    const karaageCard = createMenuItem("The Bite-Sized", _images_karaage_jpg__WEBPACK_IMPORTED_MODULE_3__, "Bite-sized flavoured gold, inspired by Japanese karaage. Bound to leave you wanting more.")
    specialityItems.appendChild(karaageCard);
    const prawnPasteCard = createMenuItem("The Aromatic", _images_prawn_paste_jpg__WEBPACK_IMPORTED_MODULE_4__, "Crunchy and uniquely flavoured with aromatic prawn paste, this is a classic dish in Singapore");
    specialityItems.appendChild(prawnPasteCard);
    const herbaceousCard = createMenuItem("The Herbaceous", _images_herbaceous_jpg__WEBPACK_IMPORTED_MODULE_5__, "Loaded with spicest and herbs to pack incredible flavour. This is derived from Jamaica.");
    specialityItems.appendChild(herbaceousCard);
;
    speciality.appendChild(specialityTitle);
    speciality.appendChild(specialityItems);
    
    pageContentDiv.appendChild(speciality);

    pageContentDiv.style.animation = "fade-in 0.5s";

    
}

function createMenuItem(itemName, picture, itemDescription) {
    const card = document.createElement("div");
    card.classList.add("menu-card")
    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = itemName;
    const cardPicture = new Image()
    cardPicture.src = picture;
    cardPicture.classList.add("card-picture");
    const cardDescription = document.createElement("div");
    cardDescription.classList.add('card-desc');
    cardDescription.textContent = itemDescription;

    card.appendChild(cardTitle);
    card.appendChild(cardPicture);
    card.appendChild(cardDescription);
    return card;
}



/***/ }),

/***/ "./src/transition.js":
/*!***************************!*\
  !*** ./src/transition.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transition": () => (/* binding */ transition)
/* harmony export */ });
function transition(e, fun) {
    const selected = document.querySelector(".tab-selected");
    selected.classList.remove("tab-selected");
    e.target.classList.add("tab-selected");
    const pageContentDiv = document.querySelector(".page-content");
    pageContentDiv.style.animation = "fade-out 0.5s";
    setTimeout(function() {
        pageContentDiv.innerHTML = "";
        fun()
    }, 500);
}



/***/ }),

/***/ "./src/images/classic-fried-chicken.jpg":
/*!**********************************************!*\
  !*** ./src/images/classic-fried-chicken.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5884d4be9cea1e157844.jpg";

/***/ }),

/***/ "./src/images/flaming-fried-chicken.jpeg":
/*!***********************************************!*\
  !*** ./src/images/flaming-fried-chicken.jpeg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92a0b44bffcfd3aa44f7.jpeg";

/***/ }),

/***/ "./src/images/flat-fried-chicken.jpg":
/*!*******************************************!*\
  !*** ./src/images/flat-fried-chicken.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "615566909887238d4444.jpg";

/***/ }),

/***/ "./src/images/fried-chicken-drumstick.png":
/*!************************************************!*\
  !*** ./src/images/fried-chicken-drumstick.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc855abd37736377f41b.png";

/***/ }),

/***/ "./src/images/herbaceous.jpg":
/*!***********************************!*\
  !*** ./src/images/herbaceous.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc0a3380da3ab0adf82f.jpg";

/***/ }),

/***/ "./src/images/icon.png":
/*!*****************************!*\
  !*** ./src/images/icon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "616970e83bb359abefeb.png";

/***/ }),

/***/ "./src/images/karaage.jpg":
/*!********************************!*\
  !*** ./src/images/karaage.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c429d4aafbb757f2a5f5.jpg";

/***/ }),

/***/ "./src/images/prawn-paste.jpg":
/*!************************************!*\
  !*** ./src/images/prawn-paste.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa6885993ce0805bf18d.jpg";

/***/ }),

/***/ "./src/images/saucy.jpg":
/*!******************************!*\
  !*** ./src/images/saucy.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "997ed74963cc4c51f845.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aboutus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutus.js */ "./src/aboutus.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _findus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./findus.js */ "./src/findus.js");
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transition.js */ "./src/transition.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_fried_chicken_drumstick_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/fried-chicken-drumstick.png */ "./src/images/fried-chicken-drumstick.png");
/* harmony import */ var _images_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/icon.png */ "./src/images/icon.png");








const head = document.querySelector("head");
const icon = document.createElement("link");
icon.rel = "icon";
icon.type = "image/x-icon";
icon.href = _images_icon_png__WEBPACK_IMPORTED_MODULE_6__;
head.appendChild(icon);


const contentDiv = document.getElementById("content");
const header = document.createElement("header");
header.textContent = "Fried Chickies";
contentDiv.appendChild(header);
const drumstickIcon = new Image();
drumstickIcon.classList.add("drumstick");
drumstickIcon.src = _images_fried_chicken_drumstick_png__WEBPACK_IMPORTED_MODULE_5__;


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

aboutUsTab.addEventListener("click", e=>{(0,_transition_js__WEBPACK_IMPORTED_MODULE_3__.transition)(e,_aboutus_js__WEBPACK_IMPORTED_MODULE_0__.initializeAboutUsPage)});
menuTab.addEventListener("click", e=>{(0,_transition_js__WEBPACK_IMPORTED_MODULE_3__.transition)(e,_menu_js__WEBPACK_IMPORTED_MODULE_1__.initializeMenu)});
findUsTab.addEventListener("click", e=>{(0,_transition_js__WEBPACK_IMPORTED_MODULE_3__.transition)(e,_findus_js__WEBPACK_IMPORTED_MODULE_2__.initializeContact)});

(0,_aboutus_js__WEBPACK_IMPORTED_MODULE_0__.initializeAboutUsPage)();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXdEOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJEQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDeUQ7QUFDQztBQUNuQjtBQUNJO0FBQ087QUFDRDs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNEQUFzRCw4REFBTztBQUM3RDtBQUNBLG9EQUFvRCwrREFBTztBQUMzRDtBQUNBLHFEQUFxRCw4Q0FBSztBQUMxRDtBQUNBLHlEQUF5RCxnREFBTztBQUNoRTtBQUNBLDBEQUEwRCxvREFBVTtBQUNwRTtBQUNBLDREQUE0RCxtREFBVTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZtRDtBQUNSO0FBQ0s7QUFDTDtBQUN0QjtBQUN3QztBQUNqQjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZDQUFXO0FBQ3ZCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0VBQVM7OztBQUc3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHlDQUF5QywwREFBVSxHQUFHLDhEQUFxQixFQUFFO0FBQzdFLHNDQUFzQywwREFBVSxHQUFHLG9EQUFjLEVBQUU7QUFDbkUsd0NBQXdDLDBEQUFVLEdBQUcseURBQWlCLEVBQUU7O0FBRXhFLGtFQUFxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0dXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ZpbmR1cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBjaGlja2VuQkcgZnJvbSBcIi4vaW1hZ2VzL2ZsYXQtZnJpZWQtY2hpY2tlbi5qcGdcIjtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUFib3V0VXNQYWdlKCkge1xuICAgIGNvbnN0IHBhZ2VDb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLWNvbnRlbnRcIik7XG4gICAgY29uc3QgYWJvdXRVc0ZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhYm91dFVzRmlyc3QuY2xhc3NMaXN0LmFkZChcImFib3V0LXVzLWZpcnN0XCIpO1xuICAgIGNvbnN0IGFib3V0VXNGaXJzdE1lc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgYWJvdXRVc0ZpcnN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGFib3V0VXNGaXJzdENhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFib3V0VXNGaXJzdE1lc3MuY2xhc3NMaXN0LmFkZChcImFib3V0LXVzLWZpcnN0LW1lc3NhZ2VcIik7XG4gICAgYWJvdXRVc0ZpcnN0VGl0bGUuY2xhc3NMaXN0LmFkZChcImFib3V0LXVzLXRpdGxlXCIpO1xuICAgIGFib3V0VXNGaXJzdENhcHRpb24uY2xhc3NMaXN0LmFkZChcImFib3V0LXVzLWNhcHRpb25cIik7XG4gICAgYWJvdXRVc0ZpcnN0VGl0bGUudGV4dENvbnRlbnQgPSBcIk1vcmUgdGhhbiBqdXN0IGZyaWVkIGNoaWNrZW5cIjtcbiAgICBhYm91dFVzRmlyc3RDYXB0aW9uLnRleHRDb250ZW50ID1cIkF0IEZyaWVkIENoaWNraWVzLCB3ZSBwcmlkZSBvdXJzZWx2ZXMgd2l0aCBkZWxpdmVyaW5nIHRoZSBiZXN0IGV4cGVyaWVuY2VzIHRvIG91ciBjdXN0b21lcnMgYnkgb2ZmZXJpbmcgc3BlY2lhbHR5IGZyaWVkIGNoaWNrZW4gd2l0aCByZWNpcGVzIGRlcml2ZWQgZnJvbSBkaWZmZXJlbnQgY3Vpc2luZXMuIENoZWNrIG91dCBvdXIgbWVudSB0byBsZWFybiBtb3JlIGFib3V0IHdoYXQgd2UgaGF2ZSFcIlxuXG4gICAgYWJvdXRVc0ZpcnN0TWVzcy5hcHBlbmRDaGlsZChhYm91dFVzRmlyc3RUaXRsZSk7XG4gICAgYWJvdXRVc0ZpcnN0TWVzcy5hcHBlbmRDaGlsZChhYm91dFVzRmlyc3RDYXB0aW9uKTtcbiAgICBjb25zdCB0cmF5T2ZDaGlja2VuID0gbmV3IEltYWdlKCk7XG4gICAgdHJheU9mQ2hpY2tlbi5zcmMgPSBjaGlja2VuQkc7XG4gICAgdHJheU9mQ2hpY2tlbi5jbGFzc0xpc3QuYWRkKFwidHJheS1vZi1jaGlja2VuXCIpO1xuICAgIFxuICAgIGFib3V0VXNGaXJzdC5hcHBlbmRDaGlsZChhYm91dFVzRmlyc3RNZXNzKTtcbiAgICBhYm91dFVzRmlyc3QuYXBwZW5kQ2hpbGQodHJheU9mQ2hpY2tlbik7XG4gICAgcGFnZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYWJvdXRVc0ZpcnN0KTtcbiAgICBwYWdlQ29udGVudERpdi5zdHlsZS5hbmltYXRpb24gPSBcImZhZGUtaW4gMC41c1wiO1xuXG59XG5cblxuZXhwb3J0IHtpbml0aWFsaXplQWJvdXRVc1BhZ2V9OyIsImZ1bmN0aW9uIGluaXRpYWxpemVDb250YWN0KCkge1xuICAgIGNvbnN0IHBhZ2VDb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLWNvbnRlbnRcIik7XG4gICAgY29uc3QgbWVzc2FnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVzc2FnZURpdi5jbGFzc0xpc3QuYWRkKFwibWVzc2FnZVwiKTtcbiAgICBtZXNzYWdlRGl2LnRleHRDb250ZW50ID0gXCJTbywgd2hhdCBhcmUgeW91IHdhaXRpbmcgZm9yP1wiXG4gICAgcGFnZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVzc2FnZURpdik7XG5cbiAgICBjb25zdCBmaW5kVXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZpbmRVc0Rpdi5jbGFzc0xpc3QuYWRkKFwiZmluZC11c1wiKTsgXG4gICAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICBtYXAuY2xhc3NMaXN0LmFkZChcIm1hcFwiKTtcbiAgICBtYXAuc3JjID0gXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQvdjEvcGxhY2U/cT1wbGFjZV9pZDpDaElKblh3QU9LQVoyakVSQXMtTUhzMWFEZ0kma2V5PUFJemFTeUFnUVd3bHQzem9Rb21DRTNKUXJ3NFZ1dTlvLUN6SVhvTVwiO1xuXG5cbiAgICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdEluZm8uY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaW5mb1wiKTtcbiAgICBjb25zdCBmaXJzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmaXJzdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWluZm8tdGl0bGVcIik7XG4gICAgY29uc3QgZmlyc3RDYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmaXJzdENhcHRpb24uY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaW5mby1jYXB0aW9uXCIpO1xuICAgIGNvbnN0IHNlY29uZENhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlY29uZENhcHRpb24uY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaW5mby1jYXB0aW9uXCIpO1xuICAgIGNvbnN0IHRoaXJkQ2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcmRDYXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWluZm8tY2FwdGlvblwiKTtcbiAgICBmaXJzdFRpdGxlLnRleHRDb250ZW50ID0gXCJGaW5kIFVzXCJcbiAgICBmaXJzdENhcHRpb24udGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uOiAzIFJpdmVyIFZhbGxleSBSZCwgU2luZ2Fwb3JlIDE3OTAyNFwiXG4gICAgc2Vjb25kQ2FwdGlvbi50ZXh0Q29udGVudCA9IFwiUGhvbmUgTnVtYmVyOiArNjUgMDAwMCAwMDAwXCI7XG4gICAgdGhpcmRDYXB0aW9uLnRleHRDb250ZW50ID0gXCJPcGVuaW5nIEhvdXJzOiBNb24gLSBTYXR1cmRheSwgMTE6MDAgQU0gdG8gMTI6MDAgUE1cIjtcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChmaXJzdFRpdGxlKTtcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChmaXJzdENhcHRpb24pO1xuICAgIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKHNlY29uZENhcHRpb24pO1xuICAgIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKHRoaXJkQ2FwdGlvbik7XG5cbiAgICBmaW5kVXNEaXYuYXBwZW5kQ2hpbGQobWFwKTtcbiAgICBmaW5kVXNEaXYuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pO1xuICAgIHBhZ2VDb250ZW50RGl2LmFwcGVuZENoaWxkKGZpbmRVc0Rpdik7XG5cbiAgICBwYWdlQ29udGVudERpdi5zdHlsZS5hbmltYXRpb24gPSBcImZhZGUtaW4gMC41c1wiO1xufVxuXG5leHBvcnQge2luaXRpYWxpemVDb250YWN0fTsiLCJpbXBvcnQgY2xhc3NpYyBmcm9tIFwiLi9pbWFnZXMvY2xhc3NpYy1mcmllZC1jaGlja2VuLmpwZ1wiO1xuaW1wb3J0IGZsYW1pbmcgZnJvbSBcIi4vaW1hZ2VzL2ZsYW1pbmctZnJpZWQtY2hpY2tlbi5qcGVnXCI7XG5pbXBvcnQgc2F1Y3kgZnJvbSBcIi4vaW1hZ2VzL3NhdWN5LmpwZ1wiO1xuaW1wb3J0IGthcmFhZ2UgZnJvbSBcIi4vaW1hZ2VzL2thcmFhZ2UuanBnXCI7XG5pbXBvcnQgcHJhd25QYXN0ZSBmcm9tIFwiLi9pbWFnZXMvcHJhd24tcGFzdGUuanBnXCI7XG5pbXBvcnQgaGVyYmFjZW91cyBmcm9tIFwiLi9pbWFnZXMvaGVyYmFjZW91cy5qcGdcIjtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZU1lbnUoKSB7XG4gICAgY29uc3QgcGFnZUNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2UtY29udGVudFwiKTtcbiAgICBjb25zdCBzcGVjaWFsaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzcGVjaWFsaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHNwZWNpYWxpdHlJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3BlY2lhbGl0eS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgICBzcGVjaWFsaXR5VGl0bGUuY2xhc3NMaXN0LmFkZChcIm1lbnUtdGl0bGVcIik7XG4gICAgc3BlY2lhbGl0eUl0ZW1zLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1zXCIpO1xuICAgIHNwZWNpYWxpdHlUaXRsZS50ZXh0Q29udGVudCA9IFwiU3BlY2lhbGl0aWVzXCI7XG5cbiAgICBjb25zdCBjbGFzc2ljQ2FyZCA9IGNyZWF0ZU1lbnVJdGVtKFwiVGhlIENsYXNzaWNcIiwgY2xhc3NpYywgXCJDbGFzc2ljLCBtb3V0aC13YXRlcmluZywgY3J1bmNoeSBmcmllZCBjaGlja2VuIGZlYXR1cmluZyBvdXIgcHJvcHJpZXRhcnkgYmxlbmQgb2YgaGVyYnMgYW5kIHNwaWNlcy5cIik7XG4gICAgc3BlY2lhbGl0eUl0ZW1zLmFwcGVuZENoaWxkKGNsYXNzaWNDYXJkKTtcbiAgICBjb25zdCBmbGFtaW5nQ2FyZCA9IGNyZWF0ZU1lbnVJdGVtKFwiVGhlIEZsYW1lXCIsIGZsYW1pbmcsIFwiTG9va2luZyBmb3IgYSBraWNrPyBUaGlzIGlzIG91ciBzcGljaWVzdCBpdGVtIG9uIHRoZSBtZW51LlwiKTtcbiAgICBzcGVjaWFsaXR5SXRlbXMuYXBwZW5kQ2hpbGQoZmxhbWluZ0NhcmQpO1xuICAgIGNvbnN0IHNhdWN5Q2FyZCA9IGNyZWF0ZU1lbnVJdGVtKFwiVGhlIFNhdWNpZXN0XCIsIHNhdWN5LCBcIlN3ZWV0IGFuZCBzYXZvdXJ5LCB0aGlzIGRpc2ggdGFrZXMgaXRzIGluc3BpcmF0aW9ucyBmcm9tIEtvcmVhbiBmcmllZCBjaGlja2VuLlwiKTtcbiAgICBzcGVjaWFsaXR5SXRlbXMuYXBwZW5kQ2hpbGQoc2F1Y3lDYXJkKTtcbiAgICBjb25zdCBrYXJhYWdlQ2FyZCA9IGNyZWF0ZU1lbnVJdGVtKFwiVGhlIEJpdGUtU2l6ZWRcIiwga2FyYWFnZSwgXCJCaXRlLXNpemVkIGZsYXZvdXJlZCBnb2xkLCBpbnNwaXJlZCBieSBKYXBhbmVzZSBrYXJhYWdlLiBCb3VuZCB0byBsZWF2ZSB5b3Ugd2FudGluZyBtb3JlLlwiKVxuICAgIHNwZWNpYWxpdHlJdGVtcy5hcHBlbmRDaGlsZChrYXJhYWdlQ2FyZCk7XG4gICAgY29uc3QgcHJhd25QYXN0ZUNhcmQgPSBjcmVhdGVNZW51SXRlbShcIlRoZSBBcm9tYXRpY1wiLCBwcmF3blBhc3RlLCBcIkNydW5jaHkgYW5kIHVuaXF1ZWx5IGZsYXZvdXJlZCB3aXRoIGFyb21hdGljIHByYXduIHBhc3RlLCB0aGlzIGlzIGEgY2xhc3NpYyBkaXNoIGluIFNpbmdhcG9yZVwiKTtcbiAgICBzcGVjaWFsaXR5SXRlbXMuYXBwZW5kQ2hpbGQocHJhd25QYXN0ZUNhcmQpO1xuICAgIGNvbnN0IGhlcmJhY2VvdXNDYXJkID0gY3JlYXRlTWVudUl0ZW0oXCJUaGUgSGVyYmFjZW91c1wiLCBoZXJiYWNlb3VzLCBcIkxvYWRlZCB3aXRoIHNwaWNlc3QgYW5kIGhlcmJzIHRvIHBhY2sgaW5jcmVkaWJsZSBmbGF2b3VyLiBUaGlzIGlzIGRlcml2ZWQgZnJvbSBKYW1haWNhLlwiKTtcbiAgICBzcGVjaWFsaXR5SXRlbXMuYXBwZW5kQ2hpbGQoaGVyYmFjZW91c0NhcmQpO1xuO1xuICAgIHNwZWNpYWxpdHkuYXBwZW5kQ2hpbGQoc3BlY2lhbGl0eVRpdGxlKTtcbiAgICBzcGVjaWFsaXR5LmFwcGVuZENoaWxkKHNwZWNpYWxpdHlJdGVtcyk7XG4gICAgXG4gICAgcGFnZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoc3BlY2lhbGl0eSk7XG5cbiAgICBwYWdlQ29udGVudERpdi5zdHlsZS5hbmltYXRpb24gPSBcImZhZGUtaW4gMC41c1wiO1xuXG4gICAgXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKGl0ZW1OYW1lLCBwaWN0dXJlLCBpdGVtRGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNhcmRcIilcbiAgICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY2FyZC10aXRsZVwiKTtcbiAgICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSBpdGVtTmFtZTtcbiAgICBjb25zdCBjYXJkUGljdHVyZSA9IG5ldyBJbWFnZSgpXG4gICAgY2FyZFBpY3R1cmUuc3JjID0gcGljdHVyZTtcbiAgICBjYXJkUGljdHVyZS5jbGFzc0xpc3QuYWRkKFwiY2FyZC1waWN0dXJlXCIpO1xuICAgIGNvbnN0IGNhcmREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZGVzYycpO1xuICAgIGNhcmREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW1EZXNjcmlwdGlvbjtcblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRQaWN0dXJlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmREZXNjcmlwdGlvbik7XG4gICAgcmV0dXJuIGNhcmQ7XG59XG5cbmV4cG9ydCB7aW5pdGlhbGl6ZU1lbnV9OyIsImZ1bmN0aW9uIHRyYW5zaXRpb24oZSwgZnVuKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYi1zZWxlY3RlZFwiKTtcbiAgICBzZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKFwidGFiLXNlbGVjdGVkXCIpO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJ0YWItc2VsZWN0ZWRcIik7XG4gICAgY29uc3QgcGFnZUNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2UtY29udGVudFwiKTtcbiAgICBwYWdlQ29udGVudERpdi5zdHlsZS5hbmltYXRpb24gPSBcImZhZGUtb3V0IDAuNXNcIjtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBwYWdlQ29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBmdW4oKVxuICAgIH0sIDUwMCk7XG59XG5cbmV4cG9ydCB7dHJhbnNpdGlvbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHtpbml0aWFsaXplQWJvdXRVc1BhZ2V9IGZyb20gXCIuL2Fib3V0dXMuanNcIjtcbmltcG9ydCB7IGluaXRpYWxpemVNZW51IH0gZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUNvbnRhY3QgfSBmcm9tIFwiLi9maW5kdXMuanNcIjtcbmltcG9ydCB7dHJhbnNpdGlvbn0gZnJvbSBcIi4vdHJhbnNpdGlvbi5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBkcnVtc3RpY2sgZnJvbSBcIi4vaW1hZ2VzL2ZyaWVkLWNoaWNrZW4tZHJ1bXN0aWNrLnBuZ1wiO1xuaW1wb3J0IGNoaWNrZW5JY29uIGZyb20gXCIuL2ltYWdlcy9pY29uLnBuZ1wiO1xuXG5jb25zdCBoZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik7XG5jb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5pY29uLnJlbCA9IFwiaWNvblwiO1xuaWNvbi50eXBlID0gXCJpbWFnZS94LWljb25cIjtcbmljb24uaHJlZiA9IGNoaWNrZW5JY29uO1xuaGVhZC5hcHBlbmRDaGlsZChpY29uKTtcblxuXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbmhlYWRlci50ZXh0Q29udGVudCA9IFwiRnJpZWQgQ2hpY2tpZXNcIjtcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbmNvbnN0IGRydW1zdGlja0ljb24gPSBuZXcgSW1hZ2UoKTtcbmRydW1zdGlja0ljb24uY2xhc3NMaXN0LmFkZChcImRydW1zdGlja1wiKTtcbmRydW1zdGlja0ljb24uc3JjID0gZHJ1bXN0aWNrO1xuXG5cbmNvbnN0IHRhYkJyb3dzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudGFiQnJvd3Nlci5jbGFzc0xpc3QuYWRkKFwidGFiLWJyb3dzZXJcIik7XG5jb25zdCBhYm91dFVzVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmFib3V0VXNUYWIudGV4dENvbnRlbnQgPSBcIkFCT1VUIFVTXCI7XG5hYm91dFVzVGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIik7XG5jb25zdCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm1lbnVUYWIudGV4dENvbnRlbnQgPSBcIk9VUiBNRU5VXCI7XG5tZW51VGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIik7XG5jb25zdCBmaW5kVXNUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZmluZFVzVGFiLnRleHRDb250ZW50ID0gXCJGSU5EIFVTXCI7XG5maW5kVXNUYWIuY2xhc3NMaXN0LmFkZChcInRhYlwiKTtcblxudGFiQnJvd3Nlci5hcHBlbmRDaGlsZChhYm91dFVzVGFiKTtcbnRhYkJyb3dzZXIuYXBwZW5kQ2hpbGQobWVudVRhYik7XG50YWJCcm93c2VyLmFwcGVuZENoaWxkKGZpbmRVc1RhYik7XG5oZWFkZXIuYXBwZW5kQ2hpbGQodGFiQnJvd3Nlcik7XG5oZWFkZXIuYXBwZW5kQ2hpbGQoZHJ1bXN0aWNrSWNvbik7XG5cbmNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnBhZ2VDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJwYWdlLWNvbnRlbnRcIik7XG5jb250ZW50RGl2LmFwcGVuZENoaWxkKHBhZ2VDb250ZW50KTtcblxuYWJvdXRVc1RhYi5jbGFzc0xpc3QuYWRkKFwidGFiLXNlbGVjdGVkXCIpO1xuXG5hYm91dFVzVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlPT57dHJhbnNpdGlvbihlLGluaXRpYWxpemVBYm91dFVzUGFnZSl9KTtcbm1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGU9Pnt0cmFuc2l0aW9uKGUsaW5pdGlhbGl6ZU1lbnUpfSk7XG5maW5kVXNUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGU9Pnt0cmFuc2l0aW9uKGUsaW5pdGlhbGl6ZUNvbnRhY3QpfSk7XG5cbmluaXRpYWxpemVBYm91dFVzUGFnZSgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=