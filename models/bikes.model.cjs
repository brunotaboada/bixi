module.exports = (sequelize, Sequelize) => {
    const Bikes = sequelize.define("bikes", {
      name: {
        type: Sequelize.STRING
      },
      damage: {
        type: Sequelize.BOOLEAN
      },
      location_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updatedAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    });
  
    return Bikes;
  };