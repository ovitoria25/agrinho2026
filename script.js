// ACCORDION

const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach(button => {

button.addEventListener("click", () => {

const content = button.nextElementSibling;

const isVisible =
content.style.display === "block";

document
.querySelectorAll(".accordion-content")
.forEach(item=>{
item.style.display="none";
});

if(!isVisible){
content.style.display="block";
}

});

});

// FONTE

const root = document.documentElement;
let fontSize = 16;

document
.getElementById("increaseFont")
.addEventListener("click",()=>{

fontSize += 2;
root.style.fontSize = fontSize + "px";

});

document
.getElementById("decreaseFont")
.addEventListener("click",()=>{

fontSize -= 2;

if(fontSize < 12){
fontSize = 12;
}

root.style.fontSize = fontSize + "px";

});

// TEMA

document
.getElementById("toggleTheme")
.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

});

// LEITURA POR VOZ

let speech;

document
.getElementById("readContent")
.addEventListener("click",()=>{

window.speechSynthesis.cancel();

const content =
document.getElementById("mainContent").innerText;

speech =
new SpeechSynthesisUtterance(content);

speech.lang = "pt-BR";
speech.rate = 1;

window.speechSynthesis.speak(speech);

});

document
.getElementById("stopReading")
.addEventListener("click",()=>{

window.speechSynthesis.cancel();

});

// FORMULÁRIO

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Inscrição enviada com sucesso!"
);

form.reset();

});