const submitnews = document.getElementById("email_newsletter_submit");
const submitcontact = document.getElementById("submit_contact");

function newsletter(){
    alert('Takk for at du følger vårt nyhetsbrev. Du vil ikke angre!🕺')
}

submitnews.addEventListener("click", newsletter, true);

function contact(){
    alert('Takk for din melding, du hører fra oss løpet av 24 timer. 📱')
}

submitcontact.addEventListener("click", contact, true);