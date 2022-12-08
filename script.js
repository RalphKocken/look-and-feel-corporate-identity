let dialog = document.querySelector(".dialogstekjeslijst-orchidee");
let openDialog = document.querySelector(".stekjes-meer-info-button");
let closeDialog = document.querySelector(".close-dialog-stekjes-button")


let eenvoudig = document.querySelectorAll(".eenvoudig");
let gemiddeld = document.querySelectorAll(".gemiddeld");
let gevorderd = document.querySelectorAll(".gevorderd");

let eenvoudigButton = document.querySelector(".eenvoudigButton");
let gemiddeldButton = document.querySelector(".gemiddeldButton");
let gevorderdButton = document.querySelector(".gevorderdButton");
let laatalleszienButton = document.querySelector(".laatalleszienButton");


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

  document.getElementById("stekjeslijst").style.justifyContent = "center";
}


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

  document.getElemendById("stekjeslijst").style.justifyContent = "flex-start";
}

// eenvoudig knop
eenvoudigButton.addEventListener("click", eenvoudigShow);

function eenvoudigShow(){
  removeAll();
  eenvoudig.forEach(element => {
    element.style.display = "flex";
  });
}

gemiddeldButton.addEventListener("click", gemiddeldShow);

function gemiddeldShow(){
  removeAll();
  gemiddeld.forEach(element => {
    element.style.display = "flex";
  });
}

gevorderdButton.addEventListener("click", gevorderdShow);

function gevorderdShow(){
  removeAll();
  gevorderd.forEach(element => {
    element.style.display = "flex";
  });
}

laatalleszienButton.addEventListener("click", laatalleszienShow);
  function laatalleszienShow(){
    laatalleszien();
  }


// KORTERE VERSIE EENVOUDIG BUTTON
// eenvoudigButton.addEventListener("click", () => {
//   removeAll();
//   eenvoudig.forEach(element => {
//     element.style.display = "flex";
//   });
// });


