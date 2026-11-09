import { createButtton } from "../components.mjs";
import Tooltip from "../Tooltip/Tooltip.mjs";

export default class App {
  #element;
  #tooltip;
  #activeTooltip;

  constructor(element) {
    this.#element = element;
  }

  init() {
    this.btn = createButtton({
      type: "button",
      className: "btn",
      text: "Click to toggle popover",
    });
    this.#tooltip = new Tooltip();

    this.#element.append(this.btn);

    this.btn.addEventListener("click", this.onClick);
  }

  onClick = () => {
    if (!this.#activeTooltip) {
      this.#activeTooltip = this.#tooltip.showTooltip();

      return;
    }

    this.#activeTooltip.remove();
    this.#activeTooltip = null;
  };
}
