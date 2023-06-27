import axios from 'axios';

const API_KEY = 'Maf5M0QV1i9R8WB8MjlLX0o1IGn4D1oF';
const BASE_URL = 'https://api.nytimes.com/svc/';

export default class NytService {
  constructor() {
    this.searchQuery = '';
    this.categoryQuery = '';
    this.dateQuery = '';
    this.newsType = 'mp';
    this.newsNumber = 0;
    this.apiPagination = false;
    this.page = 0;
    this.totalPages = 0;
  }

  async fetchMostPopular() {
    const MOSTPOP_URL = BASE_URL + 'mostpopular/v2/viewed/1.json';

    const config = {
      url: MOSTPOP_URL,
      params: {
        'api-key': API_KEY,
      },
    };

    const fetchedData = await axios(config);
    this.getNewsNumber(fetchedData.data);
    return fetchedData.data.results;
  }

  async fetchCategories() {
    const CAT_URL = BASE_URL + 'news/v3/content/section-list.json';
    const config = {
      url: CAT_URL,
      params: {
        'api-key': API_KEY,
      },
    };

    const fetchedData = await axios(config);
    return fetchedData.data.results;
  }

  async fetchByCategory() {
    const BYCAT_URL = `${BASE_URL}news/v3/content/all/${this.categoryQuery}.json`;
    const config = {
      url: BYCAT_URL,
      params: {
        'api-key': API_KEY,
      },
    };

    const fetchedData = await axios(config);
    this.resetPage();
    this.newsType = 'cat';
    this.apiPagination = false;
    this.getNewsNumber(fetchedData.data);
    return fetchedData.data.results;
  }

  async fetchByQuery() {
    const BYCAT_URL = BASE_URL + 'search/v2/articlesearch.json';
    const config = {
      url: BYCAT_URL,
      params: {
        'api-key': API_KEY,
        fq: this.searchQuery,
        page: this.page,
        sort: 'newest',
      },
    };

    if (this.dateQuery) {
      config.params.begin_date = this.dateQuery;
      config.params.end_date = this.dateQuery;
    }

    const fetchedData = await axios(config);

    this.newsType = 'word';
    this.apiPagination = true;
    this.getNewsNumber(fetchedData.data);
    return fetchedData.data.response;
  }

  getNewsNumber(data) {
    if (this.newsType === 'mp' || this.newsType === 'cat')
      this.newsNumber = data ? data.results.length : 0;

    if (this.newsType === 'word')
      this.newsNumber = data ? data.response.meta.hits : 0;
  }

  setPage(pageNumber) {
    this.page = pageNumber;
  }

  resetPage() {
    this.page = 0;
  }

  setTotalPages(pages) {
    this.totalPages = pages;
  }

  getTotalPages() {
    return this.totalPages;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = encodeURIComponent(newQuery.toLowerCase());
  }

  get date() {
    return this.searchQuery;
  }

  set date(newDate) {
    this.dateQuery = newDate;
  }

  get category() {
    return this.categoryQuery;
  }

  set category(newCategory) {
    this.categoryQuery = encodeURIComponent(
      newCategory.replace('&amp;', '&').toLowerCase()
    );
  }
}
