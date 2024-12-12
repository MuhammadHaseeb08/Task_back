const express = require('express')
const authRouter=require("./Routers/authRouter/auth");
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json());
const connection=require("../server/dbconn");

const port = 4000
app.use("/api",authRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
connection();
