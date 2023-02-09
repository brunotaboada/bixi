module.exports = {
    HOST: "localhost",
    USER: "bruno",
    PASSWORD: "123456",
    DB: "bixi",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };