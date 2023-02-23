console.log("Cześć Ten kod jest juz w repozytorium Git.");

let button = document.querySelector(".container__button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".container__button");

button.addEventListener("click", () => {
    body.classList.toggle("light");

    themeName.innerText = body.classList.contains("light") ? "Ciemny motyw" : "Jasny motyw";
})