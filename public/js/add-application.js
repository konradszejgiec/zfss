"use strict";

getElementBy("#mainNav").scrollIntoView();

handleEventListener("#check-btn", "click", (e) => {
  e.preventDefault();
  fetchData(`/wniosek/${getElementValue("#pesel")}`, (person) => {
    setElementValue("#id", person.nrprac);
    setElementValue("#name", person.imie + " " + person.nazwisko);
    setElementValue("#unit", person.jednorg);
  });
  setClass("#formularz", "border");
  setClass("#formularz", "border-dark");
  setClass("#pesel-container", "invisible");
  removeClass("#id-container", "invisible");
  removeClass("#form-container", "invisible");
  removeClass("#submit-btn", "invisible");
  getElementBy("#form-container").scrollIntoView();
});

handleEventListener("#submit-btn", "click", generatePDF);
handleEventListener("#application-own", "click", (e) => {
  if (e.target.checked) {
    setElementValue("#application-number", `FDK.KS.1620/                           /2022`);
    setClass("#application-kids", "invisible");
  } else {
    setElementValue("#application-number", "");
    removeClass("#application-kids", "invisible");
  }
});

handleEventListener("#application-kids", "click", (e) => {
  if (e.target.checked) {
    setElementValue("#application-number", `FDK.KS.1621/                           /2022`);
    setClass("#application-own", "invisible");
  } else {
    setElementValue("#application-number", "");
    removeClass("#application-own", "invisible");
  }
});

handleEventListener("#statement-kids", "click", (e) => {
  if (e.target.checked) {
    removeClass("#statement-kids-quantity", "invisible");
  } else setClass("#statement-kids-quantity", "invisible");
});

handleEventListener("#statement-salary", "input", (e) => {
  if (e.target.value < 1500) {
    setElementValue("#application-value", 1100);
  } else if ((e.target.value >= 1500) & (e.target.value < 2000)) {
    setElementValue("#application-value", 950);
  } else if (e.target.value >= 2000) setElementValue("#application-value", 800);

  if (e.target.value == "") setElementValue("#application-value", "");
});
