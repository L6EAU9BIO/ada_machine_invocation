// LINK SECTIONS

const entreeDonjon = document.getElementById("entree_donjon")
const introDonjon = document.getElementById("intro_donjon")
const invocTerminee = document.getElementById("invocation_terminee")

// LINK BUTTON

const boutonDonjon = document.getElementById("bouton_donjon")
const boutonInvoc = document.getElementsById("bouton_invoc")
const boutonChanger = document.getElementsById("bouton_changer")

// LINK INPUT

const inputPrenom = document.getElementById("prenom")
const selectCreature = document.getElementById("creature")

//LINK PARAGRAPHE

const descriptCreat = document.getElementById("descriptif_creature")

//LINK IMG

const imagesCreatures = {

    "Goblin" : document.getElementById("goblin"),
    "Fée" : document.getElementById("fee"),
    "Loup-Garou" : document.getElementById("loup_garou"),
    "Sirène" : document.getElementById("sirene")
    
}
//DESCRIPIF CREATURE

const descriptions = {
   
    "Goblin" : "Oscilliant entre perfidité maligne et nervosuté exacerbé, le goblin est un compagnon qui sera vous preter main forte au combat. A moins qu'il decide de s'enfuir face au danger...",

    "Fee" : "Esprit de la forêt, protectrice des voyageurs égarés, elle saura vous guider grace à la limière qui la fait vivre, gare a ses fourberies qu'elle pourrait vous faire pour passer le temps.",

    "Loup-Garou" : "Atteints de Lycantropie, la plus part des humains en étant affecté n'en ont même pas conscience et mènent une vie sanguinaire chaque nuit de pleine lune.",

    "Sirene" : "Certains marisn pensent avoir fait une belle prise en les sortant de leurs filets, mais c'est plutôt elle qui vient d'en prendre une. J'espere qu'il y a un peu d'eau là ou vous allez..."

}

// Fonction de dissimulation et appartiton des bloc section

const hide = (element) => {
    element.classList.add("hide")

}

const show = (element) => {
    element.classList.remove("hide")
}

const cacherCreature =() => {
    for (const img of Object.values(imagesCreatures)) {
        hide(img)
    }
}

// Logique bouton

boutonDonjon.addEventListener('click', function() {
    cacher(entreeDonjon)
    montrer(introDonjon)
})


boutonInvoc.addEventListener('click', function() {
   const prenom = inputPrenom.value.trim()
   const creature = selectCreature.value.trim()

    if (!prenom) {
        alert("Je crois ne pas avoir entendu ton prénom, je suis un peu dur de la feuille, essaie en parlant un peu plus fort je t(en pris.")
        return
    }
    
    cacherCreature()
    montrer(imagesCreatures[creature])
})

// CHANGER DE FORME

boutonChanger.addEventListener('click', function() {
    cacher(invocTerminee)
    montrer(introDonjon)
})