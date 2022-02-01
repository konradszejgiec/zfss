"use strict";

fetchData("/news.json", (items) => {
  renderLastNews(sortArticles(items)[0]);
});
