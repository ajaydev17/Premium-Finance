const navbar = document.getElementById('navbar');

let scrolled = false;
let previousScrollPosition = window.pageYOffset;

window.onscroll = function() {

    currentScrollPosition = window.pageYOffset;
    if (previousScrollPosition < currentScrollPosition) {
        navbar.classList.remove('top');

        if (!scrolled) {
            navbar.style.display = 'none';
            scrolled = true;
        }
    }
    else {
        navbar.classList.add('top');
        navbar.style.display = 'initial';
        scrolled = false;
    }
};

function setContent() {

    let checkBoxChecked = document.getElementById('checkbox').checked;

    let heroContentElements = document.querySelectorAll('.hero .content *');

    if (checkBoxChecked === true) {

        heroContentElements.forEach(element => {
            element.style.zIndex = "-1";
        })

    }
    else {
        
        heroContentElements.forEach(element => {
            element.style.zIndex = "10";
        })

    }

}