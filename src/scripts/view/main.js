import '../component/news-list';
import '../component/search-bar';
import Datasource from '../data/data-source';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const newsListElement = document.querySelector('news-list');

  const searchNews = async () => {
    try {
      const result = await Datasource.searchNews(searchElement.value);
      if (result.length === 0) {
        // eslint-disable-next-line no-use-before-define
        fallbackResult('data tidak ditemukan');
      } else {
        // eslint-disable-next-line no-use-before-define
        renderResult(result);
      }
    } catch (error) {
      // eslint-disable-next-line no-use-before-define
      fallbackResult(error);
    }
  };

  const renderResult = (results) => {
    newsListElement.listNews = results;
  };

  const fallbackResult = (message) => {
    newsListElement.renderError(message);
  };

  searchElement.addEventListener('click', searchNews);
};

export default main;
