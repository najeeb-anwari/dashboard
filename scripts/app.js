const menuBtn = document.querySelector(".menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");
let isNavOpen = false;
const mainNav = document.querySelector("nav.sidebar");
const header = document.querySelector("header");
menuBtn.addEventListener("click", (e) => {
    isNavOpen = !isNavOpen;
    if(isNavOpen) {
        menuBtnIcon.classList.replace("bi-list", "bi-x-lg")
        header.classList.add("hide-y");
        document.querySelector(".group-items").appendChild(menuBtn);
    }
    else {
        header.classList.remove("hide-y");
        header.appendChild(menuBtn);
        menuBtnIcon.classList.replace("bi-x-lg", "bi-list");
    }
    mainNav.classList.toggle("active"); 
    
});


// const menuLinks = document.querySelector("nav.sidebar ul");
// menuLinks.addEventListener("click", (e) => {
//     if(e.target.nodeName == "A") {
//         isNavOpen = !isNavOpen;
//         menuBtnIcon.classList.replace("bi-x-lg", "bi-list");
//         mainNav.classList.toggle("active");
//     }
// });