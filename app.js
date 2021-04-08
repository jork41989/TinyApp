const express = require("express");
const app = express();

app.get('/', (req, res) => res.send("HEY YOU MADE IT!"))


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server has served on port ${port}`))