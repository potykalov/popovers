export function createButtton({ type, className, text }) {
  const btn = document.createElement("button");

  btn.textContent = text;
  btn.className = className;
  btn.type = type;

  return btn;
}

export function createDiv(className) {
  const divEl = document.createElement("div");

  divEl.className = className;

  return divEl;
}
