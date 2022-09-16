// eslint-disable-next-line import/no-useless-path-segments
import '../component/news-item';

class NewsList extends HTMLElement {
  set listNews(listNews) {
    this.listNews = listNews;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this.classList.add('container', 'd-flex', 'flex-wrap', 'md-justify-content-center');
    this.listNews.forEach((news) => {
      const newsElement = document.createElement('news-item');
      newsElement.news = news;
      this.appendChild(newsElement);
    });
  }

  renderError(message) {
    this.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    </div>
    `;
  }
}

customElements.define('news-list', NewsList);
