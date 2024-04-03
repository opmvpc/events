import "/style.css";
import { nav } from "/components/nav";

const app = document.querySelector("#app");

app.innerHTML = `
${nav}

<h1> Changement couleur de fond </h1>
<label for="color-input">Couleur</label>
<input type="color" id="color-input">
`;

const colorInput = document.querySelector("#color-input");
const handler = () => {
  document.body.style.backgroundColor = colorInput.value;
};
colorInput.addEventListener("input", handler);
