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
            <div class="utleier_dropdown">
                <a href="utleier.html" class="topMenuElement utleier_Element">Utleier</a>
                <div class="dropdown_content_utleier_box">
                    <div id="dropdown_triangle"></div>
                    <div class="dropdown_content_utleier">
                        <a href="#fordeler">Fordeler</a>
                        <a href="#steps">Slik fungerer det </a>
                        <a href="#priser">Priser </a>
                    </div>
                </div>
            </div>
            <a href="leietaker.html" class="topMenuElement">Leietaker</a>
            <a href="about.html" class="topMenuElement">Om oss</a>
            <a href="kontakt.html" class="topMenuElement">Kontakt</a>
        </div>
    </div>
        `;
}
modheader() 