//Select the img
const elContainer = document.getElementById ("elContainer");
console.log(elContainer);


//immagine attiva al momento
let ActiveImg = 0;

//Select tasto Nextf
const next = document.getElementById("next");
console.log(next);

//select tasto previous
const previous = document.getElementById("previous");
console.log(previous);

const {createApp} = Vue;

createApp({
    data() {
        return {
            activeImage : 0,
            movie : {
                images: [
                    '01.webp',
                    '02.webp',
                    '03.webp',
                    '04.webp',
                    '05.webp',
                ] ,
                title: [
                    "Marvel\\'s Spiderman Miles Morale",
                    "Ratchet & Clank: Rift Apart",
                    "Fortnite",
                    "Stray",
                    "Marvel's Avengers",
                ],
                text: [
                    'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                     'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                     "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                     'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                     "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
                ]
            }
        }
    },
    
}) .mount("#app");





//creo active al tasto next
next.addEventListener('click',
    function(){

        if(ActiveImg < (imagess.length = 0)) {

            img[ActiveImg].classList.remove("active");
            img[ActiveImg].classList.add("inactive");
            console.log("ciao");
    
            //Cambia immagine passare a imm successiva
            ActiveImg = ActiveImg + 1;
    
            //immagini successive cosa fa
            img[ActiveImg].classList.remove("inactive");
            img[ActiveImg].classList.add("active");
        }
    }
)


