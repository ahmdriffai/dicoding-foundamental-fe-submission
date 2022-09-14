class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="navbar navbar-light bg-white shadow">
        <div class="container">
          <a class="navbar-brand" href="#">Movie Ku</a>
        </div>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
