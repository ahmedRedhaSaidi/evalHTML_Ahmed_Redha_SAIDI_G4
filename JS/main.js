

//tabs

const boutonsOnglet = document.querySelectorAll(".btnMaison");
const contenusOnglet = document.querySelectorAll(".containerTabs");

boutonsOnglet.forEach(function (bouton) {
    bouton.addEventListener("click", function () {
        const cibleMaison = bouton.id.replace("-btn", "");
        
        boutonsOnglet.forEach(function (btn) { btn.classList.remove("actif"); });
        contenusOnglet.forEach(function (contenu) { contenu.classList.remove("actif"); });
        
        bouton.classList.add("actif");
        document.getElementById(cibleMaison).classList.add("actif");
    });
});

// sidenav

var sideNav = document.getElementById("sideNav");
var toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function() {
    sideNav.classList.toggle("open");
});


// fav
var favBtns = document.querySelectorAll("#favBtn"); // Sélectionne tous les boutons
var favIcons = document.querySelectorAll(".btnFav"); // Sélectionne toutes les icônes

favBtns.forEach((btn, index) => {
    btn.addEventListener("click", function() {
        favIcons[index].classList.toggle("actif");
    });
});







// Fonction pour valider les champs
function validerFormulaire() {
    let hasError = false; // Initialement pas d'erreur
    let errorMessages = []; // Tableau pour stocker les messages d'erreur

    // Vérification du nom (doit contenir deux mots)
    const isNomValid = nom.value.trim().includes(' ') && nom.value.trim().split(' ').length >= 2;
    setFieldState(nom, isNomValid);
    if (!isNomValid) {
        hasError = true;
        errorMessages.push("Erreur dans le nom (deux mots requis).");
    }

    // Vérification du mot de passe (doit être valide)
    const regexMdp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 caractères, au moins une lettre et un chiffre
    const isMdp1Valid = regexMdp.test(mdp1.value);
    setFieldState(mdp1, isMdp1Valid);
    if (!isMdp1Valid) {
        hasError = true;
        errorMessages.push("Mot de passe incorrect (min. 8 caractères, 1 lettre, 1 chiffre).");
    }

    // Vérification que les deux mots de passe sont identiques
    const isMdp2Valid = mdp1.value === mdp2.value;
    setFieldState(mdp2, isMdp2Valid);
    if (!isMdp2Valid) {
        hasError = true;
        errorMessages.push("Les mots de passe ne correspondent pas.");
    }

    // Vérification des cases à cocher
    if (!ageCheck.checked) {
        hasError = true;
        errorMessages.push("Vous devez confirmer que vous avez l'âge requis.");
    }
    if (!acceptCheck.checked) {
        hasError = true;
        errorMessages.push("Vous devez accepter les conditions générales.");
    }

    // Affichage des erreurs ou validation
    if (hasError) {
        alert("Erreurs détectées :\n" + errorMessages.join("\n"));
        return false; // Empêche l'envoi du formulaire
    } else {
        alert("Formulaire envoyé avec succès !");
        console.log('formulaire envoyer');
        return true; // Autorise l'envoi du formulaire
    }
}

// Ajout de l'événement `submit` au formulaire
if (forme) {
    forme.addEventListener('submit', function (event) {
        event.preventDefault(); // Empêche l'envoi par défaut
        validerFormulaire(); // Appelle la fonction de validation
    });
}
