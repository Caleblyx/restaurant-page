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

export {initializeContact};