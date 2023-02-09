const db = require("../models/index.cjs");
const Bikes = db.bikes;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const bike = {
    name: req.body.name,
    location_id: req.body.location_id
  };

  Bikes.create(bike)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Bike."
      });
    });
};

exports.findAll = (req, res) => {
    const id = req.query.id;
    const location_id = req.query.location_id;
    let condition = null;
    if(id){
      condition = { id: { [Op.eq]: `${id}` } } ;
    } else if(location_id){
      condition = { location_id : { [Op.eq]: `${location_id}` } };
    }
  
    Bikes.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving bikes."
        });
      });
};