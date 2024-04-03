import "/style.css";
import { nav } from "/components/nav";

const app = document.querySelector("#app");

app.innerHTML = `
${nav}

<button id="dropdown-toggle-btn">Ouvrir</button>

<div id="dropdown">
  Un message caché
</div>
`;

const btn = document.querySelector("#dropdown-toggle-btn");
const dropdown = document.querySelector("#dropdown");
let isOpen = false;
dropdown.style.display = "none";

const handler = () => {
  if (isOpen) {
    dropdown.style.display = "none";
    btn.innerHTML = "Ouvrir";
  } else {
    dropdown.style.display = "block";
    btn.innerHTML = "Fermer";
  }
  isOpen = !isOpen;
};

btn.addEventListener("click", handler);
