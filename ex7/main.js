import "/style.css";
import { nav } from "/components/nav";

const app = document.querySelector("#app");

const villes = {
  paris: "Paris is the capital of France",
  london: "London is the capital of UK",
  tokyo: "Tokyo is the capital of Japan",
};

const btnVillesHtml = Object.keys(villes)
  .map((v) => {
    return `<button class="btn-ville" id="${v}">${v}</button>`;
  })
  .join("");

app.innerHTML = `
${nav}

${btnVillesHtml}

<div id="content">
</div>
`;

const contentDiv = document.querySelector("#content");

const handler = (e) => {
  const target = e.currentTarget;
  const nomVille = target.id;

  contentDiv.innerHTML = villes[nomVille];
};

const btns = document.querySelectorAll("button.btn-ville");

for (let index = 0; index < btns.length; index++) {
  const element = btns[index];
  element.addEventListener("click", handler);
}
