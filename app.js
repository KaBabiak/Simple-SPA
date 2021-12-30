const body = document.body;
createFirstPage();

function createFirstPage() {
  const helloText = document.createElement("div");
  helloText.innerText = "Hello you!";
  body.appendChild(helloText);
  const nextPage = document.createElement("button");
  nextPage.setAttribute("type", "button");
  nextPage.innerText = "Next";
  body.appendChild(nextPage);
  nextPage.addEventListener("click", createSecondPage);
}

function createSecondPage() {
  const byeText = document.createElement("div");
  byeText.innerText = "See you later!";
  body.replaceChildren(byeText);
}
