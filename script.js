// LINK SECTIONS

const entreeDonjon = document.getElementById("entree_donjon")
const introDonjon = document.getElementById("intro_donjon")
const invocTerminee = document.getElementById("invocation_terminee")

// LINK BUTTON

const boutonDonjon = document.getElementById("bouton_donjon")
const boutonInvoc = document.getElementById("bouton_invoc")
const boutonChanger = document.getElementById("bouton_changer")

// LINK INPUT

const inputPrenom = document.getElementById("prenom")
const selectCreature = document.getElementById("creature")

// LINK PARAGRAPHE

const descriptCreat = document.getElementById("descriptif_creature")

// LINK IMG

const imagesCreatures = {
    "Goblin"     : document.getElementById("goblin"),
    "Fée"        : document.getElementById("fee"),
    "Loup-Garou" : document.getElementById("loup_garou"),
    "Sirène"     : document.getElementById("sirene")
}

// DESCRIPTIF CREATURE

const descriptions = {
    "Goblin"     : "Oscillant entre perfidie maligne et nervosité exacerbée, le goblin est un compagnon qui saura vous prêter main forte au combat. À moins qu'il décide de s'enfuir face au danger...",

    "Fée"        : "Esprit de la forêt, protectrice des voyageurs égarés, elle saura vous guider grâce à la lumière qui la fait vivre. Gare à ses fourberies qu'elle pourrait vous faire pour passer le temps.",

    "Loup-Garou" : "Atteints de Lycanthropie, la plupart des humains en étant affectés n'en ont même pas conscience et mènent une vie sanguinaire chaque nuit de pleine lune. On devrait te laisser tranquille maintenant.",

    "Sirène"     : "Certains marins pensent avoir fait une belle prise en les sortant de leurs filets, mais c'est plutôt elle qui vient d'en prendre une. J'espère qu'il y a un peu d'eau là où vous allez..."
}

// FONCTIONS HIDE / SHOW

const hide = (element) => {
    element.classList.add("hide")
}

const show = (element) => {
    element.classList.remove("hide")
}

const cacherCreature = () => {
    for (const img of Object.values(imagesCreatures)) {
        hide(img)
    }
}

// LOGIQUE BOUTONS

boutonDonjon.addEventListener('click', function() {
    hide(entreeDonjon)
    show(introDonjon)
})

boutonInvoc.addEventListener('click', function() {
    const prenom = inputPrenom.value.trim()
    const creature = selectCreature.value.trim()

    if (!prenom) {
        alert("Je crois ne pas avoir entendu ton prénom, je suis un peu dur de la feuille, essaie en parlant un peu plus fort je t'en prie.")
        return
    }
    
    cacherCreature()
    show(imagesCreatures[creature])
    show(descriptCreat)

    hide(introDonjon)
    show(invocTerminee)

    descriptCreat.textContent = `${prenom}, nous avons réussi à invoquer un.e ${creature} ! ${descriptions[creature]}`
})

boutonChanger.addEventListener('click', function() {
    hide(invocTerminee)
    show(introDonjon)
})