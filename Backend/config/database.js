const mongoose = require("mongoose");
const dotenv = require("dotenv");

//config
dotenv.config({ path: "backend/config/config.env" });
// moogoose.connect(process.env.DB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then((data) => {
//     console.log(`MongoDB connected with server: ${data.connection.host}`)
// }).catch((err) => {
//     console.log(err)
// })

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex:true
    })
    .then((data) => {
      console.log(`mongodb connected with server:${data.connection.host}`);
    });
};

module.exports = connectDatabase;
