module.exports = app => {
    const login = require("../repositories/login.cjs");
    var router = require("express").Router();
  
    router.get("/", login.findAll);
  
    app.use('/api/login', router);
  };