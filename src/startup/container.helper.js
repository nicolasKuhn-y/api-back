const { asClass, asFunction } = require("awilix");

class ContainerHelper {
  static inyectSingletonClass(newClass) {
    return asClass(newClass).singleton();
  }

  static inyectSingletonFunction(func) {
    return asFunction(func).singleton();
  }
}

module.exports = ContainerHelper;
