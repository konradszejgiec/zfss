"use strict";

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
const setElementValue = (selector, newValue) => {
  return (getElementBy(selector).value = newValue);
};

const setText = (selector, text) => {
  return (getElementBy(selector).innerText = text);
};

const getDisplayStyle = (selector) => {
  return getElementBy(selector).style.display;
};

const setDisplayStyle = (selector, newStyle) => {
  return (getElementBy(selector).style.display = newStyle);
};

const addElementValue = (selector, newValue) => {
  return (getElementBy(selector).value += newValue);
};

const insertItemHTML = (existingElementSelector, newElementHtml) => {
  return getElementBy(existingElementSelector).insertAdjacentHTML(
    "beforeend",
    newElementHtml
  );
};

const handleEventListener = (elementSelector, eventListener, callback) => {
  return getElementBy(elementSelector).addEventListener(
    eventListener,
    callback
  );
};

const handleEventListeners = (elementSelector, eventListener, callback) => {
  return getElementsBy(elementSelector).forEach((el) =>
    el.addEventListener(eventListener, callback)
  );
};

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

const checkingInputFulfillment = (selector1, selector2, selector3) => {
  return getElementValue(selector1) == ""
    ? true
    : getElementValue(selector2) == ""
    ? true
    : getElementValue(selector3) == ""
    ? true
    : false;
};

const hideKidsSection = (e) => {
  if (e.target.checked) {
    handleSectionVisibilityAndAutofill(
      "#application-number",
      `FDK.KS.1620/                           /2022`,
      "#application-kids-div",
      false
    );
  } else {
    handleSectionVisibilityAndAutofill(
      "#application-number",
      "",
      "#application-kids-div",
      true
    );
  }
};

const hideOwnSection = (e) => {
  if (e.target.checked) {
    handleSectionVisibilityAndAutofill(
      "#application-number",
      `FDK.KS.1621/                           /2022`,
      "#application-own-div",
      false
    );
  } else {
    handleSectionVisibilityAndAutofill(
      "#application-number",
      "",
      "#application-own-div",
      true
    );
  }
};

const showKidsQuantitySection = (e) => {
  if (e.target.checked) {
    removeClass("#statement-kids-quantity", "invisible");
  } else setClass("#statement-kids-quantity", "invisible");
};

const handleXls = async (event) => {
  const file = event.target.files[0];
  const data = await file.arrayBuffer();
  const workbook = XLSX.readFile(data);
  const personData = XLSX.utils.sheet_to_row_object_array(
    workbook.Sheets[workbook.SheetNames[0]]
  );
  sendData("/post-data", {
    content: personData,
  });
};

const handleAlertMsg = (messageSelector) => {
  setDisplayStyle(messageSelector, "block");
  setDisplayStyle("#full-form", "none");

  handleEventListeners("#confirm-btn", "click", () => {
    setDisplayStyle(messageSelector, "none");
    setDisplayStyle("#full-form", "block");
  });
};

const generatePDF = () => {
  return html2canvas(document.getElementById("form-printable")).then(function (
    canvas
  ) {
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

  if (checkingInputFulfillment("#name", "#unit", "#statement-salary")) {
    handleAlertMsg("#alert-name-salary");
  } else if (
    !getElementBy("#application-own").checked &
    !getElementBy("#application-kids").checked
  ) {
    handleAlertMsg("#alert-purpose");
  } else if (
    getElementBy("#statement-kids").checked &
    (getElementBy("#statement-kids-quantity-input").value == ("" || 0))
  ) {
    handleAlertMsg("#alert-kids-quantity");
  } else if (getElementBy("#application-kids").checked) {
    if (
      getElementBy("#to-check-input-date").value == "" ||
      getElementBy("#to-check-input-name").value == ""
    ) {
      handleAlertMsg("#alert-kids");
    } else if (
      getElementBy("#application-kids").checked &
      !getElementBy("#statement-kids").checked
    ) {
      handleAlertMsg("#alert-kids-camp");
    } else generatePDF();
  } else generatePDF();
};

const handleIndividualInputs = (person) => {
  setElementValue("#id", person.nrprac);
  setElementValue("#name", person.imie + " " + person.nazwisko);
  setElementValue("#unit", person.jednorg);
};

const handlePeselCheck = () => {
  setDisplayStyle("#person-container", "none");
  setDisplayStyle("#form-printable", "block");
  setDisplayStyle("#submit-btn", "block");
  getElementBy("#form-container").scrollIntoView();
};

const handleSectionVisibilityAndAutofill = (
  autofillSection,
  autofillTxt,
  invisibleSection,
  isRemoveClass
) => {
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
  } else if (
    (Math.round(e.target.value) >= salaryTable[1]) &
    (Math.round(e.target.value) <= salaryTable[2])
  ) {
    setElementValue("#application-value", subsidyTable[1]);
  } else if (Math.round(e.target.value) >= salaryTable[3])
    setElementValue("#application-value", subsidyTable[0]);

  if (e.target.value == "") setElementValue("#application-value", "");
};

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

const displayDismissMsg = (e) => {
  setDisplayStyle("#message-container-dismiss-auth", "block");
  setDisplayStyle("#message-container-get-auth", "none");
  e.preventDefault();
};

const handleRedirect = (e, link, condition, adress) => {
  if (condition) {
    displayDismissMsg(e);
  } else {
    link.href = `${link.href}${adress}`;
  }
};

const authorize = () => {
  return handleEventListener("#check-btn-auth", "click", (e) => {
    handleRedirect(
      e,
      getElementBy("#check-btn-auth"),
      checkingInputFulfillment("#fname", "#sname", "#lastThree"),
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
    handleRedirect(
      getElementBy("#check-btn-auth-post"),
      getElementValue("#password") == "",
      "/access?password=" + getElementValue("#password")
    );
  });
};

const fetchPersonData = (e) => {
  e.preventDefault();
  fetchData(
    `/wniosek/${
      getElementValue("#fname").toLowerCase() +
      getElementValue("#sname").toLowerCase() +
      getElementValue("#lastThree").toLowerCase()
    }`,
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

const handleApplication = () => {
  getElementBy("#person-container").scrollIntoView({ behavior: "smooth" });
  handleEventListener("#check-btn", "click", fetchPersonData);
  handleEventListener("#submit-btn", "click", handleGeneratePDF);
  handleEventListener("#application-own", "click", hideKidsSection);
  handleEventListener("#application-kids", "click", hideOwnSection);
  handleEventListener("#statement-kids", "click", showKidsQuantitySection);
  handleEventListener("#statement-salary", "input", displaySubsidy);
};
