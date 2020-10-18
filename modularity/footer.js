var footer=document.querySelector("footer");
var head=document.querySelector("head");

function modfooter(){
    head.innerHTML+=`<link rel="stylesheet" type="text/css" href="css/style.css">`;

    footer.innerHTML = `
    <div class="widget_footer" id="logo_footer">
                <img src="img/logo/logo-studentmegleren-utenbak-svart.png" width="225">
            </div>
            <div class="widget_footer" id="contactinfo_footer">
                <h4>KONTAKT OSS</h4>
                <i class="fas fa-phone-alt fa-lg"><a href="tel:+47 46 62 94 90">+47 466 29 490</a></i><br>
                <i class="fas fa-envelope fa-lg"><a href="mailto:hei@studentmegleren.no">hei@studentmegleren.no</a></i>
            </div>
            <div class="widget_footer" id="newsletter_footer">
                <h4>Meld deg på vårt nyhetsbrev:</h4>
                <form id="newsletter_form">
                    <input id="email_newsletter" type="email" placeholder="Din e-post" required="">
                    <input class="email_newsletter_submit" type="submit" value="SEND">
                </form>
            </div>
            <div class="widget_footer" id="some_footer">
                <a href="https://www.facebook.com"><i class="fab fa-facebook-f fa-lg" ></i></a>
                <a href="https://www.linkedin.com"><i class="fab fa-linkedin-in fa-lg"></i></a>
                <a href="https://www.youtube.com"><i class="fab fa-youtube fa-lg"></i></a>
            </div>
            `;
}
modfooter()