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
  sendData("/post-data", { password: getElementValue("#password-input"), content: personData });
};

const generatePDF = (e) => {
  e.preventDefault();

  html2canvas(document.getElementById("formularz")).then(function (canvas) {
    const imgData = canvas.toDataURL("image/png");
    const imgWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    // let heightLeft = imgHeight;
    const doc = new jspdf.jsPDF("p", "mm");
    const position = 0;

    doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
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
