"use strict";

fetchData("/news.json", (items) => {
  renderNews(items, getNewsHTML);
});
