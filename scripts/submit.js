const submitnews = document.getElementById("email_newsletter_submit");
const submitcontact = document.getElementById("submit_contact");
submitnews.addEventListener("click", newsletter);
submitcontact.addEventListener("click", contact);

function newsletter(){
    alert('Takk for at du følger vårt nyhetsbrev. Du vil ikke angre!🕺')
}
function contact(){
    alert('Takk for din melding, du hører fra oss løpet av 24 timer. 📱')
}