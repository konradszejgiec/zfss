"use strict";

const routes = (app, bodyParser, controller) => {
  const jsonParser = bodyParser.json({ limit: "50mb" });

  app.route("/").get(controller.displayMainPage);

  app.route("/wniosek").get(controller.displayAddApplication);

  app.route("/wniosek/:pracownik").get(controller.getPersonData);

  app.route("/regulamin-zasady-wnioski/").get(controller.displayAccessPage);

  app.route("/regulamin-zasady-wnioski/:pracownik").get(controller.displayRules);

  app.route("/faq").get(controller.displayAccessPage);

  app.route("/faq/:pracownik").get(controller.displayFaq);

  app.route("/rodo").get(controller.displayRodo);

  app.route("/kontakt").get(controller.displayContact);

  app.route("/post-data").get(controller.displayAccessPostPage).post(jsonParser, controller.postDatabase);

  app.route("/post-data/:admin").get(controller.displayPostPage);
};

module.exports = routes;
