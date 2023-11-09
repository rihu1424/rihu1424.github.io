console.log("making sure this is linked correctl");

const x=1;
const y=2;

if (x===y) {
    console.log("success!");
}
else { 
    console.log("fail");
}

const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
  });

  function random(number) {
    return Math.floor(Math.random () * number);

  }
  
  function random2(number){
    return(Math.random () * number);

  }


function draw() {
    //console.log("TEST");
  ctx.clearRect(0,0,canvas.width,canvas.height);

  for (let i = 0; i<300; i++){
      ctx.beginPath();
      let red = random(255);
      let green = random(255);
      let blue = random(255);
      let alpha = random2(1);
      let color = "rgba("+red+","+green+", "+blue+","+alpha+")"
      console.log(color);
      ctx.fillStyle = color;
      ctx.arc(
        random(canvas.width),
        random(canvas.height),
        random(50),
        0,
        2*Math.PI,
      );
      ctx.fill();
  }
}

function displayMessage() {
  const body = document.body;

  const panel = document.createElement("div");
  panel.setAttribute("class", "msgBox");
  body.appendChild(panel);

  const msg = document.createElement("p");
  msg.textContent = "This is a message box";
  panel.appendChild(msg);

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "x";
  panel.appendChild(closeBtn);

  closeBtn.addEventListener("click", () =>
    panel.parentNode.removeChild(panel),
  );

}

displayMessage();


btn.addEventListener("click",draw);

