"use strict";

handleSubmitBtn("news");
handleInputUtlis(e, "link", "#news");
handleInputUtlis(e, "obraz", "#news");
handleInputUtlis(e, "video", "#news");
handleInputUtlis(e, "bold", "#news");
handleInputUtlis(e, "emphasize", "#news");
handleInputUtlis(e, "color", "#news");

handleEventListener(".add-btn", "click", (e) => {
  insertAttachment("#news");
  getElementsBy(".form").forEach((el) => (el.style.display = null));
  changeClass("#insert", "d-grid", "d-none");
  resetInputLink();
});
