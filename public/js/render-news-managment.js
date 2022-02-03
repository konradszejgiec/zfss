"use strict";

fetchData("/news.json", (items) => {
  renderNews(items, getDeleteNewsHTML);
  //e.target.id.split("-").includes("update")
  let id;
  handleEventListener(".list-group", "click", (e) => {
    id = e.target.id.split("-")[1];
    if (!e.target.id) return;
    getElementsBy(".buttons").forEach((el) => {
      if (el.id.split("-")[1] == id) {
        if (
          getDisplayStyle(`#${el.id}`) == "" ||
          getDisplayStyle(`#${el.id}`) == "none"
        ) {
          setDisplayStyle(`#${el.id}`, "block");
        } else setDisplayStyle(`#${el.id}`, "none");
      } else setDisplayStyle(`#${el.id}`, "none");

      handleInputUtlis(`link-${id}`, `#update-${id}`);
      handleInputUtlis(`obraz-${id}`, `#update-${id}`);
      handleInputUtlis(`video-${id}`, `#update-${id}`);
      handleInputUtlis(`bold-${id}`, `#update-${id}`);
      handleInputUtlis(`emphasize-${id}`, `#update-${id}`);
      handleInputUtlis(`color-${id}`, `#update-${id}`);

      handleEventListener(".add-btn", "click", (e) => {
        e.stopImmediatePropagation();
        insertAttachment(`#update-${id}`);
        getElementsBy(".form").forEach((el) => (el.style.display = null));
        getElementsBy(".buttons").forEach((el) => (el.style.display = "none"));
        changeClass("#insert", "d-grid", "d-none");
        resetInputLink();
      });
    });
    if (e.target.classList.item(0) == "update") updateNews(e);
    if (e.target.classList.item(0) == "delete") deleteNews(e);
  });
});
