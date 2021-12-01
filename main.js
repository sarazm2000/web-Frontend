function changeMode() {
    var bodyContainer = document.body;
    bodyContainer.classList.toggle("dark-mode-body");
    var waveContainer = document.getElementById("wave");
    waveContainer.classList.toggle("dark-mode-wave");
    var navbarContainer = document.getElementById("navbarContainer");
    navbarContainer.classList.toggle("dark-mode-navbar")
}

function changeHeaderTheme (){
    var gradient = document.getElementById("header");
    // gradient.classList.toggle("change-gradient-header");
    var num1 = generateRandomHex();
    var num2 = generateRandomHex();
    // gradient.style.backgroundImage = "linear-gradient(num1, num2)";
    document.documentElement.style.setProperty(`--gradient1`, `#${num1}`);
    document.documentElement.style.setProperty(`--gradient2`, `#${num2}`);
    gradient.classList.toggle("change-gradient-header");
}

generateRandomHex = () => {
    let number = '';
    for (let i = 0; i < 6; ++i) {
        number += (Math.floor(Math.random() * 16)).toString(16);
    }
    return number;
}