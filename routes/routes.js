"use strict";

const routes = (app, bodyParser, controller) => {
  const jsonParser = bodyParser.json({ limit: "50mb" });

  app.route("/").get(controller.displayMainPage);

  app.route("/regulamin-zasady-wnioski").get(controller.displayRules);

  app.route("/wniosek").get(controller.displayAddApplication);

  app.route("/wniosek/:pracownik").get(controller.getPersonData);

  app.route("/rodo").get(controller.displayRodo);

  app.route("/obliczanie-dochodu").get(controller.displayCalcMethod);

  app.route("/faq").get(controller.displayFaqPage);

  app.route("/kontakt").get(controller.displayContact);

  app.route("/post-data").get(controller.displayPostPage).post(jsonParser, controller.postDatabase);
};

module.exports = routes;
