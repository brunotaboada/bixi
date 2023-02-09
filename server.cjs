const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const db = require("./models/index.cjs");
const app = express();

app.use(cors({origin:'*'}));
app.use(bodyParser.json());

require("./routes/rentals.routes.cjs")(app);
require("./routes/bikes.routes.cjs")(app);
require("./routes/locations.routes.cjs")(app);
require("./routes/users.routes.cjs")(app);
require("./routes/login.routes.cjs")(app);

db.sequelize.sync({}).then(() => {
    console.log("Synced db.");
}).catch((err) => {
    console.log("Failed to sync db: " + err.message);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});