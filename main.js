// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.querySelector('#modal')
modal.setAttribute("class", "hidden")

const glyphStates = {
  '♡': FULL_HEART,
  '♥': EMPTY_HEART
}

const colorStates = {
  "red": "",
  "": "red"
}

const articleLikes = document.querySelectorAll(".like-glyph");

function likeCallBack(event) {
  const heart = event.target
  mimicServerCall() 
    .then(function (serverMessage) {
      alert("You have notified the server!")
        alert(serverMessage)
      heart.innerText = glyphStates[heart.innerText]
      heart.style.color = colorStates[heart.style.color]  
    })
    .catch(function(error) {
      modal.removeAttribute("class")
        alert("Something isn't right!")
      setTimeout(modal.setAttribute("class", "hidden") , 3000)
    })
}

for (const glyph of articleLikes) {
glyph.addEventListener("click", likeCallBack)
}






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
