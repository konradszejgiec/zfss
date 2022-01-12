"use strict";

getElementBy("#mainNav").scrollIntoView();

handleEventListener("#check-btn", "click", (e) => {
  e.preventDefault();
  fetchData(`/wniosek/${getElementValue("#pesel")}`, (person) => {
    handleIndividualInputs(person);
  });
  handlePeselCheck();
});

handleEventListener("#submit-btn", "click", handleGeneratePDF);
handleEventListener("#application-own", "click", hideKidsSection);
handleEventListener("#application-kids", "click", hideOwnSection);
handleEventListener("#statement-kids", "click", showKidsQuantitySection);
handleEventListener("#statement-salary", "input", displaySubsidy);
