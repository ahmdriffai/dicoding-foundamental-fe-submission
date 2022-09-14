class SearchBar extends HTMLElement{
    connectedCallback() {
        this.render();
    }
    
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
    
    get value() {
        return this.querySelector('#searchElement').value;
    }
    render() {
        this.innerHTML = `
        <div class="container">
            <div class="row mt-5">
                <div class="col-md-8">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control shadow" id="searchElement" placeholder="Cari berita populer">
                        <button class="btn btn-primary color-light" type="button" id="button-addon2">Cari</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('search-bar', SearchBar);