const genButton = document.getElementById("btnGenerate");
const ranButton = document.getElementById("btnRandom");
const eyes = document.getElementById("eyeSelect");
const mouth = document.getElementById("mouthSelect");
let title = document.querySelector("h1");
let emo = ["🙂","😆","😎","🙁","😖","😭","😃","🤣","🤓"];

genButton.addEventListener('click', function(){
  let eye = eyes.value;
  let mou = mouth.value;
  switch (eye+mou){
    case ":)":
      title.innerHTML = emo[0];
      break
    case "X)":
      title.innerHTML = emo[1];
      break
    case "B)":
      title.innerHTML = emo[2];
      break
    case ":(":
      title.innerHTML = emo[3];
      break
    case "X(":
      title.innerHTML = emo[4];
      break
    case "B(":
      title.innerHTML = emo[5];
      break
    case ":D":
      title.innerHTML = emo[6];
      break
    case "XD":
      title.innerHTML = emo[7];
      break   
    case "BD":
      title.innerHTML = emo[8];
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
