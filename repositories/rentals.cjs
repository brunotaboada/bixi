const db = require("../models/index.cjs");
const { QueryTypes } = require('sequelize');
const Rentals = db.rentals;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Request can not be empty!"
    });
    return;
  }

  const rental = {
    user_id: req.body.user_id,
    location_id: req.body.location_id,
    bike_id: req.body.bike_id
  };

  Rentals.create(rental)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while renting a bike."
      });
    });
};

exports.findAll = (req, res) => {
  const id = req.query.user_id;
  let user_filter = '';
  if(id){
    user_filter = ` where r.user_id = ${id}`
  }

  const data = db.sequelize.query(
    `select l.hub_location,b.name, r.id
    from rentals r 
      inner join locations l on r.location_id = l.id
      inner join bikes b on b.id = r.bike_id ${user_filter}`, 
    { type: QueryTypes.SELECT });
  
  data.then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err || "Some error occurred while retrieving rentals."
    });
  });

};

exports.delete = (req, res) => {
  const user_id = req.params.id;

  if(!user_id){
    res.status(500).send([{message: `Deletion failed.`}]);
    return;
  }

  Rentals.destroy({
    where: { user_id: user_id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Bike was returned successfully!"
        });
      } else {
        res.send({
          message: `Cannot return the bike for user_id=${user_id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not return the bike for user_id=" + user_id
      });
    });
  
};