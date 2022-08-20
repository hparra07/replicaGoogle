
//----------------MODAL

const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});


//------------------SUBMIT SEARCH 

document.querySelector('.form').addEventListener('submit', () => {
    event.preventDefault()
})

document.documentElement.addEventListener('keyup', (evt) => {
    if(evt.which == 13){
        let voiceText = document.querySelector('.input-form').value 
        if(voiceText.length > 0){
            window.location.href = 'https://www.google.com/search?q=' + voiceText
        }
    }
})

//-----------------ONCLICK SEARCH 

let searchUno = document.querySelector('.btn-submit').addEventListener('click', search)

function search (){
  
  let voiceText = document.querySelector('.input-form').value
      if(voiceText.length > 0){
      window.location.href = 'https://www.google.com/search?q=' + voiceText
  }
}

//------------------VOICE SEARCH

document.querySelector('.microphone').addEventListener('click', voiceOpen)
document.querySelector('.modal-content').addEventListener('click', voiceRecognition)
let microOk = false

function voiceOpen () {
  voiceRecognition()
}

function voiceRecognition () {
    if (microOk == false) {
      window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition
      if ('SpeechRecognition' in window) {
        console.log('Parar el código hasta dar click');
      }
    }

    document.querySelector('.speak').innerHTML = 'Listening...'
    let recognition = new window.SpeechRecognition

    recognition.onresult = (event) => {
        let voiceText = event.results[0][0].transcript
        //document.querySelector('.speak').innerHTML = voiceText
        recognition.stop()
        
        setTimeout(() => {
          window.location.href = 'https://www.google.com/search?q=' + voiceText
        },1000)
      }

    recognition.start()
}

//---------------- NAV

document.querySelector('.icon-menu').addEventListener('click', openMenu)

const nav = document.querySelector('.div-menu')

let navClose = true

function openMenu () {
    if (navClose == true) {
      nav.style.display = 'block'
      navClose = false
    }else {
      nav.style.display = 'none'
      navClose = true
    }
}