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
  const personData = XLSX.utils.sheet_to_row_object_array(
    workbook.Sheets[workbook.SheetNames[0]]
  );
  sendData("/post-data", {
    content: personData,
  });
};

const checkingAppInputFulfillment = () => {
  return getElementValue("#name") == ""
    ? true
    : getElementValue("#unit") == ""
    ? true
    : getElementValue("#statement-salary") == ""
    ? true
    : false;
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
  if (checkingAppInputFulfillment()) handleAlertMsg();
  else generatePDF();
};

const handleIndividualInputs = (person) => {
  setElementValue("#id", person.nrprac);
  setElementValue("#name", person.imie + " " + person.nazwisko);
  setElementValue("#unit", person.jednorg);
};

const handlePeselCheck = () => {
  setDisplayStyle("#person-container", "none");
  removeClass("#id-container", "invisible");
  removeClass("#form-container", "invisible");
  removeClass("#submit-btn", "invisible");
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

const authorize = () => {
  return handleEventListener("#check-btn-auth", "click", (e) => {
    let checkAuthInputs =
      getElementValue("#fname") == ""
        ? true
        : getElementValue("#sname") == ""
        ? true
        : getElementValue("#lastThree") == ""
        ? true
        : false;
    let authUser = `${
      getElementValue("#fname").toLowerCase() +
      getElementValue("#sname").toLowerCase() +
      getElementValue("#lastThree").toLowerCase()
    }`;
    let link;
    if (checkAuthInputs) {
      setDisplayStyle("#message-container-dismiss-auth", "block");
      setDisplayStyle("#message-container-get-auth", "none");
      e.preventDefault();
    } else {
      link = getElementBy("#check-btn-auth");
      link.href = `${link.href}/pracownik?fname=${getElementValue(
        "#fname"
      ).toLowerCase()}&sname=${getElementValue("#sname").toLowerCase()}&id=${
        Math.random() * 1000000000000000000
      }${getElementValue("#lastThree").toLowerCase()[2]}${
        Math.random() * 1000000000000000000
      }${getElementValue("#lastThree").toLowerCase()[0]}${
        getElementValue("#lastThree").toLowerCase()[1]
      }${Math.random() * 1000000000000000000}`;
    }
  });
};

const authorizePostSection = () => {
  return handleEventListener("#check-btn-auth-post", "click", (e) => {
    let authUser = getElementValue("#password").toLowerCase();
    let link;
    if (getElementValue("#password") == "") {
      setDisplayStyle("#message-container-dismiss-auth", "block");
      setDisplayStyle("#message-container-get-auth", "none");
      e.preventDefault();
    } else {
      link = getElementBy("#check-btn-auth-post");
      link.href = `${link.href}/${authUser}`;
    }
  });
};
