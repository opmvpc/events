import "/style.css";
import { nav } from "/components/nav";

const app = document.querySelector("#app");
let color = "blue";

app.innerHTML = `
${nav}

<h1> Changement couleur de fond </h1>
<button id="change-color-btn">
    ${color === "blue" ? "Bleu" : "Rouge"}
</button>
`;

const colorBtn = document.querySelector("#change-color-btn");
const handler = () => {
  if (color === "blue") {
    color = "red";
    colorBtn.innerHTML = "Rouge";
  } else {
    color = "blue";
    colorBtn.innerHTML = "Bleu";
  }
  document.body.style.backgroundColor = color;
};
colorBtn.addEventListener("click", handler);
