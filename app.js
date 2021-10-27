const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, './client/build')));

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/user', require('./routes/user.routes'));
app.use('/api/profile', require('./routes/profile.routes'));

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'));
    app.listen(PORT, () => console.log(`App has been started on ${PORT}...`));
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
}

start();
