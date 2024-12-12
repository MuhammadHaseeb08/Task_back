const mongoose = require("mongoose");

// Dc1JC2ciMIGbPA10
// Dc1JC2ciMIGbPA10
// mongodb+srv://<db_username>:<db_password>@cluster0.d6x3u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// haseebshabir31
// 22Z7awlrDXubOkru
let connection=()=>{
    mongoose
  .connect("mongodb+srv://haseebshabir31:22Z7awlrDXubOkru@cluster0.l3gmc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("im mongo");
  })
  .catch((e) => {
    e
  });
}

module.exports =connection