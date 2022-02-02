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

export {transition};