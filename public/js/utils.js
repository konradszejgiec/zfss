"use strict";
// 1. basic utils
// a) getters

const getElementBy = (elementSelector) => {
  return document.querySelector(elementSelector);
};

const getElementsBy = (elementSelector) => {
  return document.querySelectorAll(elementSelector);
};

const getElementValue = (elementSelector) => {
  return getElementBy(elementSelector).value;
};

const getDate = (elementSelector) => {
  return getElementBy(elementSelector).valueAsDate;
};

const getDisplayStyle = (selector) => {
  return getElementBy(selector).style.display;
};

// b) setters

const setElementValue = (selector, newValue) => {
  return (getElementBy(selector).value = newValue);
};

const setText = (selector, text) => {
  return (getElementBy(selector).innerText = text);
};

const setDisplayStyle = (selector, newStyle) => {
  return (getElementBy(selector).style.display = newStyle);
};

const addElementValue = (selector, newValue) => {
  return (getElementBy(selector).value += newValue);
};

// c) event handling

const handleEventListener = (elementSelector, eventListener, callback) => {
  return getElementBy(elementSelector).addEventListener(eventListener, callback);
};

const handleEventListeners = (elementSelector, eventListener, callback) => {
  return getElementsBy(elementSelector).forEach((el) => el.addEventListener(eventListener, callback));
};

// 2. handling of HTML elements
// a) inserting elements

const insertItemHTML = (existingElementSelector, newElementHtml) => {
  return getElementBy(existingElementSelector).insertAdjacentHTML("beforeend", newElementHtml);
};

// b) manipulating classes

const changeClass = (selector, removedClass, newClass) => {
  removeClass(selector, removedClass);
  setClass(selector, newClass);
};

const setClass = (selector, newClass) => {
  return getElementBy(selector).classList.add(newClass);
};

const removeClass = (selector, removedClass) => {
  return getElementBy(selector).classList.remove(removedClass);
};

//3. Application section
// a) checkings

const checkingInputFulfillment = (selector1, selector2, selector3, selector4) => {
  return getElementValue(selector1) == ""
    ? true
    : getElementValue(selector2) == ""
    ? true
    : getElementValue(selector3) == ""
    ? true
    : getElementValue(selector4) == ""
    ? true
    : false;
};
// b) alerts

const handleAlertMsg = (messageSelector) => {
  setDisplayStyle(messageSelector, "block");
  setDisplayStyle("#full-form", "none");

  handleEventListeners("#confirm-btn", "click", () => {
    setDisplayStyle(messageSelector, "none");
    setDisplayStyle("#full-form", "block");
  });
};

// c) application utils

const handlePeselCheck = () => {
  setDisplayStyle("#person-container", "none");
  setDisplayStyle("#form-printable", "block");
  setDisplayStyle("#submit-btn", "block");
  getElementBy("#form-container").scrollIntoView();
};

const handleSectionVisibilityAndAutofill = (autofillSection, autofillTxt, invisibleSection, isRemoveClass) => {
  if (isRemoveClass) {
    setElementValue(autofillSection, autofillTxt);
    removeClass(invisibleSection, "invisible");
  } else {
    setElementValue(autofillSection, autofillTxt);
    setClass(invisibleSection, "invisible");
  }
};

const displaySubsidy = (e) => {
  const subsidyTable = [800, 950, 1100];
  const salaryTable = [1499, 1500, 1999, 2000];

  if (Math.round(e.target.value) <= salaryTable[0]) {
    setElementValue("#application-value", subsidyTable[2]);
  } else if ((Math.round(e.target.value) >= salaryTable[1]) & (Math.round(e.target.value) <= salaryTable[2])) {
    setElementValue("#application-value", subsidyTable[1]);
  } else if (Math.round(e.target.value) >= salaryTable[3]) setElementValue("#application-value", subsidyTable[0]);

  if (e.target.value == "") setElementValue("#application-value", "");
};

// d) hanlding sections inputs

const hideOwnSection = (e) => {
  if (e.target.checked) {
    handleSectionVisibilityAndAutofill("#application-number", `FDK.KS.1621/                           /2022`, "#application-own-div", false);
  } else {
    handleSectionVisibilityAndAutofill("#application-number", "", "#application-own-div", true);
  }
};

const hideKidsSection = (e) => {
  if (e.target.checked) {
    handleSectionVisibilityAndAutofill("#application-number", `FDK.KS.1620/                           /2022`, "#application-kids-div", false);
  } else {
    handleSectionVisibilityAndAutofill("#application-number", "", "#application-kids-div", true);
  }
};

const showKidsQuantitySection = (e) => {
  if (e.target.checked) {
    removeClass("#statement-kids-quantity", "invisible");
  } else setClass("#statement-kids-quantity", "invisible");
};

const handleIndividualInputs = (person) => {
  setElementValue("#id", person.nrprac);
  setElementValue("#name", person.imie + " " + person.nazwisko);
  setElementValue("#unit", person.jednorg);
};

// e) handling pdf

const generatePDF = () => {
  return html2canvas(document.getElementById("form-printable")).then(function (canvas) {
    const imgData = canvas.toDataURL("image/png");
    const imgWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    // let heightLeft = imgHeight;
    const doc = new jspdf.jsPDF("p", "mm");
    const position = 0;

    doc.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
    // heightLeft -= pageHeight;

    // while (heightLeft >= 0) {
    //   position = heightLeft - imgHeight;
    //   doc.addPage();
    //   doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    //   heightLeft -= pageHeight;
    // }
    doc.save("wniosek_o_dofinansowanie.pdf");
  });
};

const handleGeneratePDF = (e) => {
  e.preventDefault();

  if (checkingInputFulfillment("#name", "#unit", "#statement-salary", "#sign-employee")) {
    handleAlertMsg("#alert-name-salary");
  } else if (!getElementBy("#application-own").checked & !getElementBy("#application-kids").checked) {
    handleAlertMsg("#alert-purpose");
  } else if (getElementBy("#statement-kids").checked & (getElementBy("#statement-kids-quantity-input").value == ("" || 0))) {
    handleAlertMsg("#alert-kids-quantity");
  } else if (getElementBy("#application-kids").checked) {
    if (getElementBy("#to-check-input-date").value == "" || getElementBy("#to-check-input-name").value == "") {
      handleAlertMsg("#alert-kids");
    } else if (getElementBy("#application-kids").checked & !getElementBy("#statement-kids").checked) {
      handleAlertMsg("#alert-kids-camp");
    } else generatePDF();
  } else generatePDF();
};

// f) fetch employees data

const fetchPersonData = (e) => {
  e.preventDefault();
  fetchData(
    `/wniosek/${getElementValue("#fname").toLowerCase() + getElementValue("#sname").toLowerCase() + getElementValue("#lastThree").toLowerCase()}`,
    (person) => {
      handleIndividualInputs(person);
    }
  );
  handlePeselCheck();
  setElementValue(
    "#sign-employee",
    new Date().toLocaleString("pl-PL", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    })
  );
};

// g) handling application

const handleApplication = () => {
  getElementBy("#person-container").scrollIntoView({ behavior: "smooth" });
  handleEventListener("#check-btn", "click", fetchPersonData);
  handleEventListener("#submit-btn", "click", handleGeneratePDF);
  handleEventListener("#application-own", "click", hideKidsSection);
  handleEventListener("#application-kids", "click", hideOwnSection);
  handleEventListener("#statement-kids", "click", showKidsQuantitySection);
  handleEventListener("#statement-salary", "input", displaySubsidy);
};

// 3. Employee section

// a) utils

const generatePassword = () => {
  let length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
};

const generateId = () => {
  return (
    generatePassword() +
    Math.floor(100000 + Math.random() * 900000) +
    getElementValue("#lastThree").toLowerCase()[2] +
    Math.floor(100000 + Math.random() * 900000) +
    getElementValue("#lastThree").toLowerCase()[0] +
    Math.floor(100000 + Math.random() * 900000) +
    getElementValue("#lastThree").toLowerCase()[1] +
    Math.floor(100000 + Math.random() * 900000)
  );
};

const handleRedirect = (e, link, condition, adress) => {
  if (condition) {
    displayDismissMsg(e);
  } else {
    link.href = `${link.href}${adress}`;
  }
};

// b) alerts

const displayDismissMsg = (e) => {
  setDisplayStyle("#message-container-dismiss-auth", "block");
  setDisplayStyle("#message-container-get-auth", "none");
  e.preventDefault();
};

// b) FAQ

const handleFaq = (e) => {
  const idArray = e.target.id.split("-");
  const idNumber = idArray[idArray.length - 1];

  if (e.target.classList[0] == "btn") {
    if (getDisplayStyle(`#faq-${idNumber}`) == "none") {
      setDisplayStyle(`#faq-${idNumber}`, "block");
      setText(`#show-btn-${idNumber}`, "UKRYJ ODPOWIEDŹ");
    } else if (getDisplayStyle(`#faq-${idNumber}`) == "block") {
      setDisplayStyle(`#faq-${idNumber}`, "none");
      setText(`#show-btn-${idNumber}`, "POKAŻ ODPOWIEDŹ");
    }
  }
};

const displayFaqAnswers = () => {
  getElementBy("h3").scrollIntoView({ behavior: "smooth" });
  handleEventListener(".wrapper", "click", handleFaq);
};

//4. News
// a) Utils

const sortArticles = (articles) => {
  let sortedArray = articles.sort((a, b) => {
    let dateA = new Date(a.date);
    let dateB = new Date(b.date);
    return dateB - dateA;
  });
  return sortedArray;
};

const renderNews = (news, callback) => {
  sortArticles(news).forEach((item) => {
    insertItemHTML(".list-group", callback(item));
  });
};

const getContentHTML = (item) => {
  return `${item.content.split("\n").join("<br />")}`;
};

const getLastNewsHTML = (item) => {
  return `<a href="/news/${
    item._id
  }" class="btn btn-outline-secondary col-md-10 col-lg-8 col-xl-12 mb-2 border border-5 border-danger rounded-3"><p class="text-center m-1" style="font-size:15px;""><em>${new Date(
    item.date
  ).toLocaleString("pl-PL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })}</p><h3 class="text-center">${item.title}</h3><p class="text-center m-1" style="font-size:15px;"">Tematyka: ${item.description}</em></p>`;
};

const getNewsHTML = (item) => {
  return `<a href="/news/${item._id}" class="btn btn-outline-secondary mb-2 text-center rounded-3">${
    item.title
  }<p class="text-center m-1" style="font-size:15px;"><em>Tematyka: ${
    item.description
  }<em></p><p class="text-center m-1" style="font-size:15px;">Data: ${new Date(item.date).toLocaleString("pl-PL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })}</p></a>`;
};

// b) fetch data

const getNewsContent = (callback, isLastNews) => {
  return fetchData("/news.json", (items) => {
    if (isLastNews) callback(sortArticles(items)[0]);
    else callback(items);
  });
};

const getNewsList = (callback, getNewsHTML) => {
  return fetchData("/news.json", (items) => {
    callback(items, getNewsHTML);
  });
};

// c) get news content

const renderContent = (items) => {
  items.forEach((element, index) => {
    if (items[index]._id == getElementBy(".post-title").id) return insertItemHTML(".font-weight-bold", getContentHTML(items[index]));
  });
};

// d) get last news (main page)

const renderLastNews = (news) => {
  insertItemHTML(".news", getLastNewsHTML(news));
};

// 5. Admin panel
// a) add news
// utils

const insertLink = (selector, link, title) => {
  return addElementValue(selector, `<a href=${link}>${title}</a>`);
};

const insertImg = (selector, link, title) => {
  return addElementValue(selector, `<img src=${link} alt=${title} class=img-fluid>`);
};

const insertVideo = (selector, link, title) => {
  return addElementValue(
    selector,
    `<video src=${link} alt=${title} autoplay="autoplay" muted="true" loop="true" playsinline="true" width="100%"></video>`
  );
};

const insertBold = (selector) => {
  return addElementValue(selector, `<b>Tutaj wstaw tekst</b>`);
};

const insertEmphasize = (selector) => {
  return addElementValue(selector, `<em>Tutaj wstaw tekst</em>`);
};

const insertColorAndBold = (selector) => {
  return addElementValue(selector, `<b><span class="text-danger">Tutaj wstaw tekst</span></b>`);
};

// insert html

const insertAttachment = (sectionSelector) => {
  if (getElementBy("#insert").classList.contains("link")) {
    insertLink(sectionSelector, getElementValue("#source-link"), getElementValue("#source-title"));
    removeClass("#insert", "link");
  }
  if (getElementBy("#insert").classList.contains("obraz")) {
    insertImg(sectionSelector, getElementValue("#source-link"), getElementValue("#source-title"));
    removeClass("#insert", "obraz");
  }
  if (getElementBy("#insert").classList.contains("video")) {
    insertVideo(sectionSelector, getElementValue("#source-link"), getElementValue("#source-title"));
    removeClass("#insert", "video");
  }
};

// handle message when insertin link, video, bold, emphasize, etc.

const handleInputUtlis = (selector, inputElement) => {
  return handleEventListener(`.${selector}`, "click", (e) => {
    e.stopImmediatePropagation();
    e.preventDefault();
    if (selector.includes("bold")) {
      return insertBold(inputElement);
    }
    if (selector.includes("emphasize")) {
      return insertEmphasize(inputElement);
    }
    if (selector.includes("color")) {
      return insertColorAndBold(inputElement);
    }
    setClass("#insert", selector.split("-")[0]);
    changeClass("#insert", "d-none", "d-grid");
    getElementsBy(".form").forEach((el) => (el.style.display = "none"));
    setText(".add-btn", `Dodaj ${selector.split("-")[0]}`);
  });
};

const resetInputLink = () => {
  setElementValue("#source-link", "");
  setElementValue("#source-title", "");
};

// add news

const handleSubmitBtn = (target) => {
  handleEventListener("#submitBtn", "click", (e) => {
    if (checkingInputFulfillment("#title", "#news", "#date", "#description")) {
      handleAlertMsg("#alert-admin");
    } else {
      sendData(`/dodaj/${target}/access`, {
        content: new News(getElementValue("#title"), getElementValue("#news"), getDate("#date"), getElementValue("#description")),
      });
      getElementBy("#submitBtn").href = `/sukces`;
    }
  });
};

// b) news managment
// insert news html

const getDeleteNewsHTML = (item) => {
  return `<div class="container-${item._id} px-4 px-lg-5 border border-dark pt-3 m-1 form"><div class="input-group mb-3 form">
  <input type="text" class="form-control" value="${item.title}" readonly>
  <button id="${item._id}" class="delete btn btn-outline-secondary" type="button" style="width: 100px;">Usuń</button>
</div><div class="input-group mb-3 form">
<textarea type="text" id="update-${item._id}" class="form-control">${item.content}</textarea>
<button id="${item._id}" class="update btn btn-outline-secondary" type="button" style="width: 100px;">Edytuj</button>
</div>${insertEditButtons(item)}</div>`;
};

//insert style buttons

const insertEditButtons = (item) => {
  return `<div class="buttons form" id="buttons-${item._id}" style="display: none;"><button id="${item._id}" class="btn btn-outline-secondary obraz-${item._id} mb-3 me-3" type="button" style="width: 150px;">Obraz</button><button id="${item._id}" class="btn btn-outline-secondary video-${item._id} mb-3 me-3" type="button" style="width: 150px;">Video</button><button id="${item._id}" class="btn btn-outline-secondary link-${item._id} mb-3 me-3" type="button" style="width: 150px;">Link</button><button id="${item._id}" class="btn btn-outline-secondary bold-${item._id} mb-3 me-3" type="button" style="width: 150px;">Pogrubienie</button><button id="${item._id}" class="btn btn-outline-secondary emphasize-${item._id} mb-3 me-3" type="button" style="width: 150px;">Pochyl</button><button id="${item._id}" class="btn btn-outline-secondary color-${item._id} mb-3 me-3" type="button" style="width: 150px;">Kolor</button></buttons>`;
};

//handle style & utils buttons

const handleNewsButtons = (dynamicSelector, elementId, selector) => {
  const buttonTypeArray = ["link", "obraz", "video", "bold", "emphasize", "color"];

  handleInputUtlis(
    `${dynamicSelector ? `${buttonTypeArray[0]}-${elementId}` : `${buttonTypeArray[0]}`}`,
    `${dynamicSelector ? `${selector}-${elementId}` : `${selector}`}`
  );
  handleInputUtlis(
    `${dynamicSelector ? `${buttonTypeArray[1]}-${elementId}` : `${buttonTypeArray[1]}`}`,
    `${dynamicSelector ? `${selector}-${elementId}` : `${selector}`}`
  );
  handleInputUtlis(
    `${dynamicSelector ? `${buttonTypeArray[2]}-${elementId}` : `${buttonTypeArray[2]}`}`,
    `${dynamicSelector ? `${selector}-${elementId}` : `${selector}`}`
  );
  handleInputUtlis(
    `${dynamicSelector ? `${buttonTypeArray[3]}-${elementId}` : `${buttonTypeArray[3]}`}`,
    `${dynamicSelector ? `${selector}-${elementId}` : `${selector}`}`
  );
  handleInputUtlis(
    `${dynamicSelector ? `${buttonTypeArray[4]}-${elementId}` : `${buttonTypeArray[4]}`}`,
    `${dynamicSelector ? `${selector}-${elementId}` : `${selector}`}`
  );
  handleInputUtlis(
    `${dynamicSelector ? `${buttonTypeArray[5]}-${elementId}` : `${buttonTypeArray[5]}`}`,
    `${dynamicSelector ? `${selector}-${elementId}` : `${selector}`}`
  );
};

const handleExternalLinkButton = (selector) => {
  handleEventListener(".add-btn", "click", (e) => {
    e.stopImmediatePropagation();
    insertAttachment(selector);
    getElementsBy(".form").forEach((searchingElement) => (searchingElement.style.display = null));
    if (selector.split("-")[0] == "#update") {
      getElementsBy(".buttons").forEach((searchingElement) => (searchingElement.style.display = "none"));
    }
    changeClass("#insert", "d-grid", "d-none");
    resetInputLink();
  });
};

const handleDisplayButtonsMenu = (selector, elementId) => {
  return getElementsBy(selector).forEach((matchingElement) => {
    if (matchingElement.id.split("-")[1] == elementId) {
      if (getDisplayStyle(`#${matchingElement.id}`) == "" || getDisplayStyle(`#${matchingElement.id}`) == "none") {
        setDisplayStyle(`#${matchingElement.id}`, "block");
      } else setDisplayStyle(`#${matchingElement.id}`, "none");
    } else setDisplayStyle(`#${matchingElement.id}`, "none");
  });
};

// delete news

const deleteNews = (e) => {
  deleteData("/zarzadzaj/news/usun", e.target.id);
  window.location.reload();
};

// update news

const updateNews = (e) => {
  updateData("/zarzadzaj/news/edytuj", e.target.id, getElementBy(`#update-${e.target.id}`).value);
  window.location.reload();
};

// c) post employers database

const handleXls = async (event) => {
  const file = event.target.files[0];
  const data = await file.arrayBuffer();
  const workbook = XLSX.readFile(data);
  const personData = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[workbook.SheetNames[0]]);
  sendData("/baza/access", {
    content: personData,
  });
};

// d) authorize section

const authorize = () => {
  return handleEventListener("#check-btn-auth", "click", (e) => {
    handleRedirect(
      e,
      getElementBy("#check-btn-auth"),
      checkingInputFulfillment("#fname", "#sname", "#lastThree", "#lastThree"),
      "/pracownik?fname=" +
        getElementValue("#fname").toLowerCase() +
        "&" +
        "sname=" +
        getElementValue("#sname").toLowerCase() +
        "&" +
        "id=" +
        generateId()
    );
  });
};

const authorizePostSection = () => {
  return handleEventListener("#check-btn-auth-post", "click", (e) => {
    handleRedirect(e, getElementBy("#check-btn-auth-post"), getElementValue("#password") == "", "/access?password=" + getElementValue("#password"));
  });
};

// e) handle managment section

const handleManagment = () => {
  let elementId;
  handleEventListener(".list-group", "click", (e) => {
    elementId = e.target.id.split("-")[1];

    if (!e.target.id) return;
    if (e.target.classList.item(0) == "update") return updateNews(e);
    if (e.target.classList.item(0) == "delete") return deleteNews(e);

    handleDisplayButtonsMenu(".buttons", elementId);
    handleNewsButtons(true, elementId, "#update");
    handleExternalLinkButton(`#update-${elementId}`);
  });
};
