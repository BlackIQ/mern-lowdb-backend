const app = require("./app/app");

require("dotenv").config()
const env = process.env;

const port = env.PORT || 8000;

app.listen(port);