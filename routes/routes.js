"use strict";

const routes = (app, bodyParser, controller) => {
  const jsonParser = bodyParser.json({ limit: "50mb" });

  //main page

  app.route("/").get(controller.displayMainPage);

  //news

  app.route("/news").get(controller.displayNews);

  app.route("/news.json").get(controller.getNews);

  app.route("/news/:id").get(controller.getSingleNews);

  // employee section

  app.route("/sekcja-pracownik").get(controller.displayEmployeeSection);

  // employee section - application

  app.route("/wniosek").get(controller.displayAddApplication);

  app.route("/wniosek/:pracownik").get(controller.getPersonData);

  // employee section - rules

  app.route("/regulamin-zasady-wnioski/").get(controller.displayAccessPage);

  app
    .route("/regulamin-zasady-wnioski/:pracownik")
    .get(controller.displayRules);

  // employee section - faq

  app.route("/faq").get(controller.displayAccessPage);

  app.route("/faq/:pracownik").get(controller.displayFaq);

  // employee section - rodo

  app.route("/rodo").get(controller.displayRodo);

  //contact

  app.route("/kontakt").get(controller.displayContact);

  // admin ponel

  app.route("/admin").get(controller.displayAddPage);

  // admin panel - add news

  app.route("/dodaj/news").get(controller.displayAccessPostPage);

  app
    .route("/dodaj/news/:admin")
    .get(controller.displayPostPage)
    .post(jsonParser, controller.postNews);

  // admin panel - delete and update news

  app.route("/zarzadzaj/news").get(controller.displayAccessPostPage);

  app.route("/zarzadzaj/news/:admin").get(controller.displayPostPage);

  app.route("/zarzadzaj/news/usun").delete(jsonParser, controller.deleteNews);

  app.route("/zarzadzaj/news/edytuj").patch(jsonParser, controller.updateNews);

  // admin panel - database

  app.route("/baza").get(controller.displayAccessPostPage);

  app
    .route("/baza/:admin")
    .get(controller.displayPostPage)
    .post(jsonParser, controller.postPersonData);

  app
    .route("/baza/usun/:admin")
    .get(controller.displaySuccessMsgDelete)
    .delete(controller.clearPersonData);

  // admin panel - success message

  app.route("/sukces").get(controller.displaySuccessMsg);
};

module.exports = routes;
