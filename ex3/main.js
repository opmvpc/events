import "/style.css";
import { nav } from "/components/nav";

const app = document.querySelector("#app");

app.innerHTML = `
${nav}

<button id="compteur-btn">0 cliques</button>
`;

let compteur = 0;

const bouton = document.querySelector("#compteur-btn");

const handleClick = () => {
  compteur += 1;
  bouton.innerHTML = `${compteur} cliques`;
};

bouton.addEventListener("click", handleClick);
