import '../component/news-list';
import '../component/search-bar';
import Datasource from "../data/data-source";

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const newsListElement = document.querySelector('news-list');

  // const displayNews = async () => {
  //   try {
  //     const result = await Datasource.listNews();
  //     renderResult(result);
  //   } catch (error) {
  //     fallbackResult(error);
  //   }
  // }

  const displayNews = async () => {
    try {
      const result = await Datasource.searchNews(searchElement.value)
      renderResult(result);
    } catch (error) {
      fallbackResult(error);
    }
  }

  const renderResult = results => {
    newsListElement.listNews = results;
  };

  const fallbackResult = message => {
    newsListElement.renderError(message);
  };
  displayNews();
  searchElement.clickEvent =  displayNews();

};

export default main;
