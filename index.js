const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

app.use(express.json()); //Property body is not defined in express by default
app.use(cors());
routes(app);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
