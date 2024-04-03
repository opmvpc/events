import "/style.css";
import { nav } from "/components/nav";

const app = document.querySelector("#app");

app.innerHTML = `
${nav}
<h1>Exercices sur les events</h1>
`;
