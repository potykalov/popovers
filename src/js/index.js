import App from "./App/App.js";

function init() {
  document.addEventListener("DOMContentLoaded", () => {
    const appEl = document.querySelector(".app");
    const app = new App(appEl);
    app.init();
  });
}

init();
