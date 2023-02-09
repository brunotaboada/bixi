const db = require("../models/index.cjs");
const Locations = db.locations;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const location = {
    hub_location: req.body.hub_location
  };

  Locations.create(location)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Location."
      });
    });
};

exports.findAll = (req, res) => {
    const hub_location = req.query.hub_location;
    var condition = hub_location ? { hub_location: { [Op.iLike]: `%${hub_location}%` } } : null;
  
    Locations.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving locations."
        });
      });
};