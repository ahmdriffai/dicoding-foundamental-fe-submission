class NewsItem extends HTMLElement {
    set news(news){
        this._news = news;
        this.render()
    }

    render() {
        this.classList.add('p-4');
        this.innerHTML = `
        <div class="card border-0 shadow" style="width: 30rem;">
            <img src="${this._news.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="text-bold text-warning">${this._news.source.name}</p>
                <h5 class="card-title text-bold">${this._news.title}</h5>
                <p class="card-text">${this._news.content}</p>
                <a href="${this._news.url}" target="_blank">Lebih banyak</a>
            </div>
        </div>
        `;
    }
}

customElements.define('news-item', NewsItem);