"use strict";

handleSubmitBtn("news");
handleInputUtlis("link", "#news");
handleInputUtlis("obraz", "#news");
handleInputUtlis("video", "#news");
handleInputUtlis("bold", "#news");
handleInputUtlis("emphasize", "#news");
handleInputUtlis("color", "#news");

handleEventListener(".add-btn", "click", (e) => {
  insertAttachment("#news");
  getElementsBy(".form").forEach((el) => (el.style.display = null));
  changeClass("#insert", "d-grid", "d-none");
  resetInputLink();
});
