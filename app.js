let btnTranslate = document.querySelector("button");
let textInput = document.querySelector("#txt-input");
let outputMsg = document.querySelector("#output-msg");

const serverURL = "https://api.funtranslations.com/translate/minion.json"

const constructUrl = inputText => serverURL + "?" + "text=" + inputText;

const errorHandler = error => {
  console.log("error occurred", error);
  alert(
    "Error occured! Please try after sometime we will resolve your issue very soon."
  );
}

const clickHandler = () => {
  var inputText = textInput.value;

  fetch(constructUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      outputMsg.innerText = json.contents.translated;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);