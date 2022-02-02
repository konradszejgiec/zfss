"use strict";

fetchData("/news.json", (items) => {
  renderCart(items, deleteNewsHTML);
});

handleEventListener(".list-group", "click", (e) => {
  if (!e.target.id) return;
  if (e.target.classList.item(0) == "update") updateNews(e);
  if (e.target.classList.item(0) == "delete") deleteNews(e);
});
