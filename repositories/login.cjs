const db = require("../models/index.cjs");
const Users = db.users;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const email = req.query.email;
    const pass = req.query.pass;
    
    if(!email || !pass) { 
      res.status(500).send([{message: `Login failed. (${email})`}]);
      return;
    }
    
    const condition = {
      email: { [Op.eq]: `${email}` },
      password: { [Op.eq]: `${pass}` }
    }

    console.log(condition);

    Users.findAll({ where: condition })
    .then(data => {
      if(data.length == 0){
        throw 'Login invalid.';
      }
      res.send(data);
    })
    .catch(err => {
      res.status(500).send([{
        message:
          err || "Some error occurred while logging in the user. - " + email
      }]);
    });
};