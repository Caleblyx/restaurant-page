import chickenBG from "./images/flat-fried-chicken.jpg";

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
    trayOfChicken.src = chickenBG;
    trayOfChicken.classList.add("tray-of-chicken");
    
    aboutUsFirst.appendChild(aboutUsFirstMess);
    aboutUsFirst.appendChild(trayOfChicken);
    pageContentDiv.appendChild(aboutUsFirst);
    pageContentDiv.style.animation = "fade-in 0.5s";

}


export {initializeAboutUsPage};