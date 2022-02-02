import classic from "./images/classic-fried-chicken.jpg";
import flaming from "./images/flaming-fried-chicken.jpeg";
import saucy from "./images/saucy.jpg";
import karaage from "./images/karaage.jpg";
import prawnPaste from "./images/prawn-paste.jpg";
import herbaceous from "./images/herbaceous.jpg";

function initializeMenu() {
    const pageContentDiv = document.querySelector(".page-content");
    const speciality = document.createElement("div");
    const specialityTitle = document.createElement("div");
    const specialityItems = document.createElement("div");
    speciality.classList.add("menu");
    specialityTitle.classList.add("menu-title");
    specialityItems.classList.add("menu-items");
    specialityTitle.textContent = "Specialities";

    const classicCard = createMenuItem("The Classic", classic, "Classic, mouth-watering, crunchy fried chicken featuring our proprietary blend of herbs and spices.");
    specialityItems.appendChild(classicCard);
    const flamingCard = createMenuItem("The Flame", flaming, "Looking for a kick? This is our spiciest item on the menu.");
    specialityItems.appendChild(flamingCard);
    const saucyCard = createMenuItem("The Sauciest", saucy, "Sweet and savoury, this dish takes its inspirations from Korean fried chicken.");
    specialityItems.appendChild(saucyCard);
    const karaageCard = createMenuItem("The Bite-Sized", karaage, "Bite-sized flavoured gold, inspired by Japanese karaage. Bound to leave you wanting more.")
    specialityItems.appendChild(karaageCard);
    const prawnPasteCard = createMenuItem("The Aromatic", prawnPaste, "Crunchy and uniquely flavoured with aromatic prawn paste, this is a classic dish in Singapore");
    specialityItems.appendChild(prawnPasteCard);
    const herbaceousCard = createMenuItem("The Herbaceous", herbaceous, "Loaded with spicest and herbs to pack incredible flavour. This is derived from Jamaica.");
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

export {initializeMenu};