const yesButton = document.querySelector("#yes");
const noButton = document.querySelector("#no");
const message = document.querySelector("#message");
const buttons = document.querySelector("#buttons");
const msgbtn = document.querySelector("#msg");
const imgsr = document.querySelector("#imgs");
const imgss = document.querySelector("#imgss");
const song = document.querySelector("#song");
const sad = document.querySelector("#sad");

yesButton.addEventListener("click", () => {
  buttons.style.display = "none";
  document.body.style.background = "Yellow";
  message.innerHTML = `<div class="heart"></div>
  <p>Thanks for being my Valentine!, I love you too 😳👉👈</p>`;
  message.style.display = "block";
  imgsr.style.display = "grid";
  msgbtn = document.querySelector("#msg").style.display = "none";
  song.play();
});

yesButton.addEventListener("click", () => {
  song.play();
});

noButton.addEventListener("click", () => {
  buttons.style.display = "none";
  message.innerHTML = `<p>Please be my valentine🥺❤️😣🫣😭...</p>`;
  message.style.display = "flex";
  msgbtn = document.querySelector("#msg").style.display = "none";
});
noButton.addEventListener("click", () => {
  sad.play();
});
