const config = require("../../config");
const app = require(".");

// para inyeccion de dependencias
const { createContainer, asValue, asClass, asFunction } = require("awilix");

//servicios
const { HomeService } = require("../services");

//controllers
const { HomeController } = require("../controllers");

//routes
const { HomeRoutes } = require("../routes/index.routes");
const Routes = require("../routes");

//models

const { UserModel, IdeaModel, CommentModel } = require("../models");

const container = createContainer();

// dividir cada capa en un register propio
container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
  })
  .register({
    UserModel: asValue(UserModel),
    IdeaModel: asValue(IdeaModel),
    CommentModel: asValue(CommentModel),
  });

module.exports = container;
