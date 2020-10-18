var header = document.querySelector("header");
var head = document.querySelector("head");

function modheader() {
    head.innerHTML += `<link rel="stylesheet" type="text/css" href="css/style.css">`;

    header.innerHTML = `
    <div class="banner">
        <div id="logo_header">
            <a href="homepage.html">
            <img src="img/logo/logo-studentmegleren-utenbak-svart.png" alt="Logo header" width="225">
            </a>
        </div>
        <div class="topnav">
            <a href="utleier.html" class="topMenuElement">Utleier</a>
            <a href="leietaker.html" class="topMenuElement">Leietaker</a>
            <a href="about.html" class="topMenuElement">Om oss</a>
            <a href="kontakt.html" class="topMenuElement">Kontakt</a>
        </div>
    </div>
        `;
}
modheader() 