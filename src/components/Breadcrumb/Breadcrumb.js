class Breadcrumb {
  constructor({ $app, initialState, onClick }) {
    this.state = initialState;
    this.$target = document.createElement("nav");
    this.$target.className = "Breadcrumb";
    this.onClick = onClick;
    $app.appendChild(this.$target);
    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.$target.innerHTML = `<div class="nav-item">root</div>${this.state
      .map(
        (node, index) =>
          `<div class="nav-item" data-index="${index}">${node.name}</div>`
      )
      .join("")}`;
  }
}

export default Breadcrumb;
