module.exports = (sequelize, Sequelize) => {
    const Rentals = sequelize.define("rentals", {
      user_id: {
        type: Sequelize.INTEGER
      },
      location_id: {
        type: Sequelize.INTEGER
      },
      bike_id: {
        type: Sequelize.INTEGER
      }
    });
  
    return Rentals;
  };