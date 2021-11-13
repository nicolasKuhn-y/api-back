const { createContainer, asValue } = require("awilix");
const { inyectSingletonClass, inyectSingletonFunction } = require("./container.helper");

const config = require("../../config");
const app = require(".");

//servicios
const { HomeService } = require("../services");

//controllers
const { HomeController } = require("../controllers");

//routes
const { HomeRoutes } = require("../routes/index.routes");
const Routes = require("../routes");

//models
const { UserModel, IdeaModel, CommentModel } = require("../models");

//repositories
const {
  UserRepository,
  IdeaRepository,
  CommentRepository,
} = require("../repositories");

const container = createContainer();

// dividir cada capa en un register propio
container
  .register({
    app: inyectSingletonClass(app),
    router: inyectSingletonFunction(Routes),
    config: asValue(config),
  })
  .register({
    HomeService: inyectSingletonClass(HomeService),
  })
  .register({
    HomeController: inyectSingletonClass(HomeController),
  })
  .register({
    HomeRoutes: inyectSingletonFunction(HomeRoutes),
  })
  .register({
    UserModel: asValue(UserModel),
    IdeaModel: asValue(IdeaModel),
    CommentModel: asValue(CommentModel),
  })
  .register({
    UserRepository: inyectSingletonClass(UserRepository),
    IdeaRepository: inyectSingletonClass(IdeaRepository),
    CommentRepository: inyectSingletonClass(CommentRepository),
  });

module.exports = container;
