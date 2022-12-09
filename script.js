let dialog = document.querySelector(".dialogstekjeslijst-orchidee");
let openDialog = document.querySelector(".stekjes-meer-info-button");
let closeDialog = document.querySelector(".close-dialog-stekjes-button");


let eenvoudig = document.querySelectorAll(".eenvoudig");
let gemiddeld = document.querySelectorAll(".gemiddeld");
let gevorderd = document.querySelectorAll(".gevorderd");

// alle stekjes
let stekjesTotaal = document.querySelector(".stekjeslijst")
let eenvoudigButton = document.querySelector(".eenvoudigButton");
let gemiddeldButton = document.querySelector(".gemiddeldButton");
let gevorderdButton = document.querySelector(".gevorderdButton");
let laatalleszienButton = document.querySelector(".laatalleszienButton");
let stekjeaanmeldenconfirm = document.querySelector(".stekje-aanmelden-button");


// VOORBEELD VAN JUSTUS//

// easyPlants.forEach((plant) => {
//   plant.addEventListener("click", plantHandler);
// });

// function plantHandler (event) {
//   event.target.classlist.toggle('visible');
// }

// document.querySelectorAll(".eenvoudig").forEach((plant) => {
//   plant.addEventListener("click",  (event) => {
//     event.target.classlist.toggle('visible')
//   }
// }


// functie voor het filteren van de stekjes
function removeAll(){
  eenvoudig.forEach(element => {
    element.style.display = "none";
  });
  gemiddeld.forEach(element => {
    element.style.display = "none";
  });
  gevorderd.forEach(element => {
    element.style.display = "none";
  });
}

//functie voor het laten zien van alle stekjes
function laatalleszien(){
  eenvoudig.forEach(element => {
    element.style.display = "flex";
  });
  gemiddeld.forEach(element => {
    element.style.display = "flex";
  });
  gevorderd.forEach(element => {
    element.style.display = "flex";

    });
}

// eenvoudig knop
eenvoudigButton.addEventListener("click", eenvoudigShow);

function eenvoudigShow(){
  removeAll();
  eenvoudig.forEach(element => {
    element.style.display = "flex";
  });
}

//gemiddeld knop
gemiddeldButton.addEventListener("click", gemiddeldShow);

function gemiddeldShow(){
  removeAll();
  gemiddeld.forEach(element => {
    element.style.display = "flex";
  });
}

//gevorderd knop//
gevorderdButton.addEventListener("click", gevorderdShow);

function gevorderdShow(){
  removeAll();
  gevorderd.forEach(element => {
    element.style.display = "flex";
  });
}

//laatalleszien knop
laatalleszienButton.addEventListener("click", laatalleszienShow);
  function laatalleszienShow(){
    laatalleszien();
  }


  var meldJePlantAanButton = document.getElementById('header-article > button')
  var plaatjeAanmeldenDialog = document.getElementById('dialogstekjeaanmelden')
  var section = document.querySelector('.stekjeslijst')
  
  plaatjeAanmeldenDialog.addEventListener('submit', function() {
    var eenKloon = section.querySelector('.stekje').cloneNode(true)
    console.log(eenKloon)
    var ingevuldeNaam = document.querySelector('input[name="naampje"]')
    var geselecteerdeFoto = document.querySelector('input[name="foto-stekje"]')
  
    eenKloon.querySelector(".stekjes-meer-info-button").textContent = ingevuldeNaam.value
  
    eenKloon.querySelector('img').src = window.URL.createObjectURL(geselecteerdeFoto.files[0])
  
    plaatjeAanmeldenDialog.querySelector('form').reset()
  
    section.append(eenKloon)
  
    eenKloon.scrollIntoView()
  })