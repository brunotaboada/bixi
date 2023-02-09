module.exports = app => {
    const locations = require("../repositories/locations.cjs");
  
    var router = require("express").Router();
  
    router.post("/", locations.create);
    router.get("/", locations.findAll);
  
    app.use('/api/locations', router);
  };