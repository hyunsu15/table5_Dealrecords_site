"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Deal",
    embedded: false
  },
  {
    name: "Admin",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "PayPerson",
    embedded: false
  },
  {
    name: "Product",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://db-layer-de1a8af52f.herokuapp.com/data-layer/dev`
});
exports.prisma = new exports.Prisma();
