module.exports = app => {
    const rentals = require("../repositories/rentals.cjs");
  
    var router = require("express").Router();
  
    router.post("/", rentals.create);
    router.get("/", rentals.findAll);
    router.delete("/:id", rentals.delete);
  
    app.use('/api/rentals', router);
  };