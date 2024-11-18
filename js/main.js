function goToScroll(name) {
    var location = document.querySelector("." + name).offsetTop;
    window.scrollTo({top: location-72, behavior: 'smooth'});
}

// 스크롤 시 배경색 변경
const headerbar = document.querySelector("#header");
const headerbarHeight = headerbar.getBoundingClientRect().height;
const headerLogo = document.querySelector(".header_logo");
const headerMenu = document.querySelectorAll("nav > button");

document.addEventListener("scroll", ()=> {
    const scrollY = window.scrollY;

    if (window.scrollY > headerbarHeight){
        headerbar.classList.add("fixed");
        headerLogo.style.color = "darkgray";
        for (var name in headerMenu){
            headerMenu[name].style.color = "darkgray";
        }
    } else {
        headerbar.classList.remove("fixed");
        headerLogo.style.color = "hsla(0,0%,100%,.7)";
        for (name in headerMenu){
            headerMenu[name].style.color = "hsla(0,0%,100%,.7)";
        }
    }
});