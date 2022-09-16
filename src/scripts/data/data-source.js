class Datasource {
  static apiKey = 'c204c73c5233429dbfc9ef21b5eb07fc';

  static apiUrl = 'https://newsapi.org/v2';

  static async searchNews(keyword) {
    try {
      const response = await fetch(`${this.apiUrl}/top-headlines?country=id&q=${keyword}`, {
        headers: {
          'x-api-key': this.apiKey,
        },
      });

      const responseJson = await response.json();

      return Promise.resolve(responseJson.articles);
    } catch (error) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('data tidak ditemukan');
    }
  }
}

export default Datasource;
