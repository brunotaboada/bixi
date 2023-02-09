module.exports = app => {
    const bikes = require("../repositories/bikes.cjs");
  
    var router = require("express").Router();
    
    router.post("/", bikes.create);
    router.get("/", bikes.findAll);
  
    app.use('/api/bikes', router);
  };