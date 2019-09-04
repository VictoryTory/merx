let btn = document.querySelector(".nav__itemordercall");
let popup = document.querySelector("#popup");
let popupBg = document.querySelector(".ordercall_bg");
let close = document.querySelector(".close");
let button = document.querySelector(".watch__all")
let gallery = document.querySelector(".photos-gallery-content");

console.log();
// 1 styles

// btn.addEventListener("click", () => {
//     popup.style.opacity = 1;
//     popup.style.visibility = 'visible';
//     popupBg.style.opacity = 1;
//     popupBg.style.visibility = 'visible';

// });

// popupBg.addEventListener("click", () => {
//     popup.style.opacity = 0;
//     popup.style.visibility = 'hidden';
//     popupBg.style.opacity = 0;
//     popupBg.style.visibility = 'hidden';
// });

// close.addEventListener('click', () => {
//     popup.style.opacity = 0;
//     popup.style.visibility = 'hidden';
//     popupBg.style.opacity = 0;
//     popupBg.style.visibility = 'hidden';
// });

// 2 classes

btn.addEventListener("click", () => {
    popup.classList.add("tumbler");
    popupBg.classList.add("tumbler");
});

popupBg.addEventListener("click", () => {
    popup.classList.remove("tumbler");
    popupBg.classList.remove("tumbler");
});

close.addEventListener("click", () => {
    popup.classList.remove("tumbler");
    popupBg.classList.remove("tumbler");
});

// <----- PopUp ---->

// gallery

button.addEventListener("click", () => {
    gallery.classList.toggle("short");

    if (button.textContent === "Скрыть") {
        button.textContent = "Посмотреть все коллекции";
    } else {
        button.textContent = "Скрыть"
    }
});