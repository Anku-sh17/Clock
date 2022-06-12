const hour = document.querySelector(".Hours");
const minute = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const cla = document.querySelector(".main2");
const start = document.querySelector(".main3");
const pause = document.querySelector(".main4");
const colu = document.querySelector(".an");

let clock = true;

function htm(hr, min, sec) {
  const html = `
    <span class="Hours">${hr} &nbsp;&nbsp; :</span>&nbsp; &nbsp;
    <span class="minutes">${min} &nbsp;&nbsp; :</span>&nbsp; &nbsp;
    <span class="seconds">${sec} </span> &nbsp; &nbsp; `;

  cla.innerHTML = " ";
  cla.insertAdjacentHTML("beforeend", html);
}

function color() {
  colu.classList.add("color1");
}
function color12() {
  colu.classList.remove("color1");
}

function showTime() {
  if (clock === true) {
    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    if (hr == 24) {
      hr = 00;
    }
    if (min == 60) {
      min = 00;
    }
    if (sec == 60) {
      sec = 00;
    }

    htm(hr, min, sec);
    setTimeout(showTime, 1000);
    setTimeout(color, 1000);
  }
}
setInterval(() => {
  color12();
}, 1500);

start.addEventListener("click", function () {
  clock = true;
  showTime();
});

pause.addEventListener("click", function (e) {
  e.preventDefault();
  clock = false;
});
