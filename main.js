const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let slides = [...$$(".slide")];

setInterval(() => {
    for (let index in slides) {
        if (slides[index].classList[1] == "show") {
            slides[index].classList.replace("show", "hide");

            let next = 0;
            if (index == 2) next = 0;
            else next = ++index;

            slides[next].classList.replace("hide", "show");
            break;
        }
    }
}, 2000);

function openModal() {
    $('#modal').classList.replace("hide", "show");
}

function closeModal() {
    $('#modal').classList.replace("show", "hide");
}

$("#modal #container").onclick = function (e) {
    e.stopPropagation();
}

$("#menu-btn").onclick = function() {
    $("#main-block .header").classList.toggle("show-mobile-nav");
}