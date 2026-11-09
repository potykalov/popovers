import { createDiv } from "../components.mjs";

export default class Tooltip {
  #coordinates;
  #tooltip;

  constructor(coordinates) {
    this.coordinates = coordinates;
  }

  createTooltip() {
    this.#tooltip = createDiv("tooltip");

    const header = document.createElement("h2");
    header.textContent = "Popover title";
    header.className = "tooltip__header";

    const content = document.createElement("p");
    content.textContent =
      "And here's some amazing content. It's very engaging. Right?";
    content.className = "tooltip__content";

    this.#tooltip.append(header, content);
  }

  showTooltip() {
    this.createTooltip();
    document.body.append(this.#tooltip);

    return this.#tooltip;
  }
}
