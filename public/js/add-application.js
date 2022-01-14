"use strict";

getElementBy("#person-container").scrollIntoView();

handleEventListener("#check-btn", "click", (e) => {
  e.preventDefault();
  console.log(getElementValue("#fname").toLowerCase() + getElementValue("#sname").toLowerCase() + getElementValue("#lastThree").toLowerCase());
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
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );
});

handleEventListener("#submit-btn", "click", handleGeneratePDF);
handleEventListener("#application-own", "click", hideKidsSection);
handleEventListener("#application-kids", "click", hideOwnSection);
handleEventListener("#statement-kids", "click", showKidsQuantitySection);
handleEventListener("#statement-salary", "input", displaySubsidy);
