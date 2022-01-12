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
  return getElementBy(existingElementSelector).insertAdjacentHTML("beforeend", newElementHtml);
};

const handleEventListener = (elementSelector, eventListener, callback) => {
  return getElementBy(elementSelector).addEventListener(eventListener, callback);
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

const handleXls = async (event) => {
  const file = event.target.files[0];
  const data = await file.arrayBuffer();
  const workbook = XLSX.readFile(data);
  const personData = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[workbook.SheetNames[0]]);
  sendData("/post-data", {
    password: getElementValue("#password-input"),
    content: personData,
  });
};

const checkingAppInputFulfillment = () => {
  return getElementValue("#name") == "" ? true : getElementValue("#unit") == "" ? true : getElementValue("#statement-salary") == "" ? true : false;
};

const handleAlertMsg = () => {
  setDisplayStyle("#alert", "block");
  setDisplayStyle("#full-form", "none");

  handleEventListener("#confirm-btn", "click", () => {
    setDisplayStyle("#alert", "none");
    setDisplayStyle("#full-form", "block");
  });
};

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
  if (checkingAppInputFulfillment()) handleAlertMsg();
  else handleGeneratePDF();
};

const handleIndividualInputs = (person) => {
  setElementValue("#id", person.nrprac);
  setElementValue("#name", person.imie + " " + person.nazwisko);
  setElementValue("#unit", person.jednorg);
};

const handlePeselCheck = () => {
  setClass("#form-printable", "border");
  setClass("#form-printable", "border-dark");
  setClass("#pesel-container", "invisible");
  removeClass("#id-container", "invisible");
  removeClass("#form-container", "invisible");
  removeClass("#submit-btn", "invisible");
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

const hideKidsSection = (e) => {
  if (e.target.checked) {
    handleSectionVisibilityAndAutofill("#application-number", `FDK.KS.1620/                           /2022`, "#application-kids-div", false);
  } else {
    handleSectionVisibilityAndAutofill("#application-number", "", "#application-kids-div", true);
  }
};

const hideOwnSection = (e) => {
  if (e.target.checked) {
    handleSectionVisibilityAndAutofill("#application-number", `FDK.KS.1621/                           /2022`, "#application-own-div", false);
  } else {
    handleSectionVisibilityAndAutofill("#application-number", "", "#application-own-div", true);
  }
};

const showKidsQuantitySection = (e) => {
  if (e.target.checked) {
    removeClass("#statement-kids-quantity", "invisible");
  } else setClass("#statement-kids-quantity", "invisible");
};

const displaySubsidy = (e) => {
  if (e.target.value < 1500) {
    setElementValue("#application-value", 1100);
  } else if ((e.target.value >= 1500) & (e.target.value < 2000)) {
    setElementValue("#application-value", 950);
  } else if (e.target.value >= 2000) setElementValue("#application-value", 800);

  if (e.target.value == "") setElementValue("#application-value", "");
};

const displayFaqAnswer = (questionNumber) => {
  return handleEventListener(`#show-btn-${questionNumber}`, "click", () => {
    if (getDisplayStyle(`#faq-${questionNumber}`) == "none") {
      setDisplayStyle(`#faq-${questionNumber}`, "block");
      setText(`#show-btn-${questionNumber}`, "UKRYJ ODPOWIEDŹ");
    } else if (getDisplayStyle(`#faq-${questionNumber}`) == "block") {
      setDisplayStyle(`#faq-${questionNumber}`, "none");
      setText(`#show-btn-${questionNumber}`, "POKAŻ ODPOWIEDŹ");
    }
  });
};
