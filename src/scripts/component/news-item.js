class NewsItem extends HTMLElement {
    set news(news){
        this._news = news;
        this.render()
    }

    render() {
        this.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        `;
    }
}

customElements.define('news-item', NewsItem);