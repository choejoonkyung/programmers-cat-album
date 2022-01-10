const IMAGE_PATH_PREFIX =
  "https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public";

class ImageView {
  constructor({ $app, initialState, onClose }) {
    this.state = initialState;
    this.$target = document.createElement("div");
    this.$target.className = "Modal ImageView";
    this.onClose = onClose;
    $app.appendChild(this.$target);
    this.render();
    this.addCloseModalEvent();
  }

  addCloseModalEvent() {
    this.$target.addEventListener("click", (e) => {
      const $clikedNode = e.target;
      if ($clikedNode.className == "Modal ImageView") {
        this.onClose();
      }
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.onClose();
      }
    });
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.$target.innerHTML = `<div class="content">${
      this.state ? `<img src="${IMAGE_PATH_PREFIX}${this.state}">` : ""
    }</div>`;
    this.$target.style.display = this.state ? "block" : "none";
  }
}

export default ImageView;
