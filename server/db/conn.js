const mongoose = require('mongoose');

const DB = process.env.DATABASE;

// MongoDB Connection
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`MongoDB Connected !`);
  })
  .catch((error) => console.error(error));
