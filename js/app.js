
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


//------------------SEARCH SUBMIT

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

//-----------------SEARCH ONCLICK

let searchUno = document.querySelector('.btn-submit').addEventListener('click', search)

function search (){
  
  let voiceText = document.querySelector('.input-form').value
      if(voiceText.length > 0){
      window.location.href = 'https://www.google.com/search?q=' + voiceText
  }
}
