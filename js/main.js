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
        headerLogo.style.color = "black";

        headerLogo.addEventListener("mouseover", function (event) {
            event.target.style.color = "orange";
          }, false);

          headerLogo.addEventListener("mouseout", function (event) {
            event.target.style.color = "black";
          }, false);
        for (var name in headerMenu){
            headerMenu[name].style.color = "black";

            headerMenu[name].addEventListener("mouseover", function (event) {
                event.target.style.color = "orange";
            }, false);

            headerMenu[name].addEventListener("mouseout", function (event) {
                event.target.style.color = "black";
            }, false);
        }
    } else {
        headerbar.classList.remove("fixed");
        headerLogo.style.color = "hsla(0,0%,100%,.7)";

        headerLogo.addEventListener("mouseover", function (event) {
            event.target.style.color = "white";
        }, false);

        headerLogo.addEventListener("mouseout", function (event) {
            event.target.style.color = "hsla(0,0%,100%,.7)";
        }, false);

        for (name in headerMenu){
            headerMenu[name].style.color = "hsla(0,0%,100%,.7)";

            headerMenu[name].addEventListener("mouseover", function (event) {
                event.target.style.color = "white";
            }, false);
            
            headerMenu[name].addEventListener("mouseout", function (event) {
                event.target.style.color = "hsla(0,0%,100%,.7)";
            }, false);
        }
    }
});

headerLogo.addEventListener("mouseover", function (event) {
    event.target.style.color = "white";
}, false);

headerLogo.addEventListener("mouseout", function (event) {
    event.target.style.color = "hsla(0,0%,100%,.7)";
}, false);

for (name in headerMenu){
    headerMenu[name].addEventListener("mouseover", function(event){
        event.target.style.color = "white";
    });

    headerMenu[name].addEventListener("mouseout", function(event){
        event.target.style.color = "hsla(0,0%,100%,.7)";
    });
}

// 모달
function popup1() {
    const modal_popup = document.querySelector('#modal_pop');
    const pro_pop = document.querySelector('#project_popup1');
    const body = document.querySelector('body');
    modal_popup.style.display = "block";
    pro_pop.style.display = "block";
    body.style.overflow = 'hidden';
}

function popup2() {
    const modal_popup = document.querySelector('#modal_pop');
    const pro_pop = document.querySelector('#project_popup2');
    const body = document.querySelector('body');
    modal_popup.style.display = "block";
    pro_pop.style.display = "block";
    body.style.overflow = 'hidden';
}

function popup3() {
    const modal_popup = document.querySelector('#modal_pop');
    const pro_pop = document.querySelector('#project_popup3');
    const body = document.querySelector('body');
    modal_popup.style.display = "block";
    pro_pop.style.display = "block";
    body.style.overflow = 'hidden';
}

function popup4() {
    const modal_popup = document.querySelector('#modal_pop');
    const pro_pop = document.querySelector('#project_popup4');
    const body = document.querySelector('body');
    modal_popup.style.display = "block";
    pro_pop.style.display = "block";
    body.style.overflow = 'hidden';
}

function popup5() {
    const modal_popup = document.querySelector('#modal_pop');
    const pro_pop = document.querySelector('#project_popup5');
    const body = document.querySelector('body');
    modal_popup.style.display = "block";
    pro_pop.style.display = "block";
    body.style.overflow = 'hidden';
}

function popup6() {
    const modal_popup = document.querySelector('#modal_pop');
    const pro_pop = document.querySelector('#project_popup6');
    const body = document.querySelector('body');
    modal_popup.style.display = "block";
    pro_pop.style.display = "block";
    body.style.overflow = 'hidden';
}

function popup7() {
    const modal_popup = document.querySelector('#modal_pop');
    const pro_pop = document.querySelector('#project_popup7');
    const body = document.querySelector('body');
    modal_popup.style.display = "block";
    pro_pop.style.display = "block";
    body.style.overflow = 'hidden';
}

function btn_close() {
    const modal_popup = document.querySelector('#modal_pop');
    const pro_pop = document.querySelector('#project_popup1');
    const body = document.querySelector('body');
    modal_popup.style.display = "none";
    pro_pop.style.display = "none";
    body.style.removeProperty('overflow');
}

function btn_close2() {
    const modal_popup = document.querySelector('#modal_pop');
    const pro_pop = document.querySelector('#project_popup2');
    const body = document.querySelector('body');
    modal_popup.style.display = "none";
    pro_pop.style.display = "none";
    body.style.removeProperty('overflow');
}

function btn_close3() {
    const modal_popup = document.querySelector('#modal_pop');
    const pro_pop = document.querySelector('#project_popup3');
    const body = document.querySelector('body');
    modal_popup.style.display = "none";
    pro_pop.style.display = "none";
    body.style.removeProperty('overflow');
}

function btn_close4() {
    const modal_popup = document.querySelector('#modal_pop');
    const pro_pop = document.querySelector('#project_popup4');
    const body = document.querySelector('body');
    modal_popup.style.display = "none";
    pro_pop.style.display = "none";
    body.style.removeProperty('overflow');
}

function btn_close5() {
    const modal_popup = document.querySelector('#modal_pop');
    const pro_pop = document.querySelector('#project_popup5');
    const body = document.querySelector('body');
    modal_popup.style.display = "none";
    pro_pop.style.display = "none";
    body.style.removeProperty('overflow');
}

function btn_close6() {
    const modal_popup = document.querySelector('#modal_pop');
    const pro_pop = document.querySelector('#project_popup6');
    const body = document.querySelector('body');
    modal_popup.style.display = "none";
    pro_pop.style.display = "none";
    body.style.removeProperty('overflow');
}

function btn_close7() {
    const modal_popup = document.querySelector('#modal_pop');
    const pro_pop = document.querySelector('#project_popup7');
    const body = document.querySelector('body');
    modal_popup.style.display = "none";
    pro_pop.style.display = "none";
    body.style.removeProperty('overflow');
}