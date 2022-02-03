"use strict";

fetchData("/news.json", (items) => {
  renderNews(items, getDeleteNewsHTML);
  //e.target.id.split("-").includes("update")
  handleEventListener(".list-group", "click", (e) => {
    e.stopImmediatePropagation();
    e.preventDefault();
    let id = e.target.id.split("-")[1];
    if (!e.target.id) return;
    if (items.some((item) => item._id == id)) {
      if (e.target == document.activeElement) {
        setDisplayStyle(`#buttons-${id}`, "block");
        handleInputUtlis(e, `link-${id}`, `#update-${id}`);
        handleInputUtlis(e, `obraz-${id}`, `#update-${id}`);
        handleInputUtlis(e, `video-${id}`, `#update-${id}`);
        handleInputUtlis(e, `bold-${id}`, `#update-${id}`);
        handleInputUtlis(e, `emphasize-${id}`, `#update-${id}`);
        handleInputUtlis(e, `color-${id}`, `#update-${id}`);
        handleEventListener(".add-btn", "click", (e) => {
          e.stopImmediatePropagation();
          e.preventDefault();
          insertAttachment(`#update-${id}`);
          getElementsBy(".form").forEach((el) => (el.style.display = null));
          changeClass("#insert", "d-grid", "d-none");
          resetInputLink();
        });
      }
    }
    if (e.target.classList.item(0) == "update") updateNews(e);
    if (e.target.classList.item(0) == "delete") deleteNews(e);
  });
});
