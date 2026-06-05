class KioskScrollIndicator extends HTMLElement {
  setConfig(config) {
    this._config = config || {};
  }

  connectedCallback() {
    if (this._initialized) return;
    this._initialized = true;
    this._render();
    this._observe();
  }

  _render() {
    this.style.display = "block";
    this.style.height = "1px";
    this.style.margin = "0";

    const style = document.createElement("style");
    style.textContent = `
      .kiosk-scroll-indicator {
        position: fixed;
        left: 50%;
        bottom: 16px;
        transform: translateX(-50%);
        z-index: 6;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: var(--card-background-color, rgba(0, 0, 0, 0.7));
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        color: var(--primary-text-color, #ffffff);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.25s ease;
        animation: kiosk-scroll-bounce 1.4s ease-in-out infinite;
      }
      .kiosk-scroll-indicator.visible {
        opacity: 1;
      }
      .kiosk-scroll-indicator ha-icon {
        --mdc-icon-size: 28px;
      }
      @keyframes kiosk-scroll-bounce {
        0%, 100% { transform: translateX(-50%) translateY(0); }
        50% { transform: translateX(-50%) translateY(5px); }
      }
    `;

    const indicator = document.createElement("div");
    indicator.className = "kiosk-scroll-indicator";
    const icon = document.createElement("ha-icon");
    icon.setAttribute("icon", this._config.icon || "mdi:chevron-down");
    indicator.appendChild(icon);

    this.appendChild(style);
    this.appendChild(indicator);
    this._indicator = indicator;
  }

  _observe() {
    this._io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // When this trailing sentinel is visible the user reached the
          // bottom, so hide the indicator. Otherwise there is more below.
          this._indicator.classList.toggle("visible", !entry.isIntersecting);
        }
      },
      { threshold: 0 }
    );
    this._io.observe(this);
  }

  disconnectedCallback() {
    if (this._io) {
      this._io.disconnect();
      this._io = null;
    }
  }

  getCardSize() {
    return 1;
  }
}

if (!customElements.get("kiosk-scroll-indicator")) {
  customElements.define("kiosk-scroll-indicator", KioskScrollIndicator);
}
