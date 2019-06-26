const genButton = document.getElementById("btnGenerate");
const ranButton = document.getElementById("btnRandom");
const eyes = document.getElementById("eyeSelect");
const mouth = document.getElementById("mouthSelect");
let title = document.querySelector("h1");

genButton.addEventListener('click', function(){
  let eye = eyes.value;
  let mou = mouth.value;
  switch (eye+mou){
    case ":)":
      title.innerHTML = "🙂";
      break
    case "B)":
      title.innerHTML = "😎";
      break
    default:
      title.innerHTML = eye + mou;    
  }
})

/*
Adapted from
https://hagata.github.io/ranmoji/documentation_articles/getting-started/using-the-api.html
*/
ranButton.addEventListener('click', function getRandom() {
  fetch('https://ranmoji.herokuapp.com/emojis/api/v.1.0/')
    .then(response => {
      response.json().then(data => {
        title.innerHTML = data.emoji;
        })
    });
})
