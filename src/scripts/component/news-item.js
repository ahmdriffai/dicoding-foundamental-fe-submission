class NewsItem extends HTMLElement {
  set news(news) {
    this.news = news;
    this.render();
  }

  render() {
    this.classList.add('p-4');
    this.innerHTML = `
    <div class="card border-0 shadow" style="width: 30rem;">
        <img src="${this.news.urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="text-bold text-warning">${this.news.source.name}</p>
            <h5 class="card-title text-bold">${this.news.title}</h5>
            <p class="card-text">${this.news.content}</p>
            <a href="${this.news.url}" target="_blank">Lebih banyak</a>
        </div>
    </div>
    `;
  }
}

customElements.define('news-item', NewsItem);
