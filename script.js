const poids = document.getElementById("poids");
const taille = document.getElementById("taille");
const calculer = document.getElementById("calculer");
const resultat = document.getElementById("resultat");
const messages = document.getElementById("messages");

calculer.addEventListener("click", function() {

    let p = Number(poids.value);
    let t = Number(taille.value);

    if (p <= 0 || t <= 0) {
        resultat.textContent = "Veuillez remplir correctement les champs.";
        return;
    }

    let imc = p / ((t / 100) * (t / 100));

    let message = "";

    if (imc < 18.5) {
        message = "Insuffisance pondérale";
    } 
    else if (imc < 25) {
        message = "Corpulence normale";
    } 
    else if (imc < 30) {
        message = "Surpoids";
    } 
    else {
        message = "Obésité";
    }

    resultat.textContent = imc.toFixed(2);
    messages.textContent = message;

});

document.getElementById("reset").addEventListener("click", function() {
    resultat.textContent = "Votre IMC apparaîtra ici.";
    messages.textContent = "";
});