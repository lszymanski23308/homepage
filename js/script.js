{
    const welcome = () => {
        console.log("Cześć Ten kod jest juz w repozytorium Git.");
    }

    welcome();

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".container__button");
        body.classList.toggle("light");
        themeName.innerText = body.classList.contains("light") ? "Ciemny motyw" : "Jasny motyw";
    }


    const init = () => {
        const button = document.querySelector(".container__button");
        button.addEventListener("click", toggleBackground)
    }

    init ();

}