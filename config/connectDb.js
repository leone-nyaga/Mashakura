const mongoose = require('mongoose');

/* asynchronous function */
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true, /* Ensures stable connection to MONGODB*/
      useNewUrlParser: true, /* Avoids deprecated warnings */
    });
    console.log('MONGODB CONNECTED');
  } catch(err) {
      console.error('ERROR CONNECTING TO MONGODB', err);
      process.exit(1); /* exit with status code 1 if there is an error */ 
  }
};

/* call the connectDb function */
connectDb();

/* Export the connectDb function */
module.exports = connectDb;
