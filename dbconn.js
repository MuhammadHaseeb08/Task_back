const mongoose = require("mongoose");

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