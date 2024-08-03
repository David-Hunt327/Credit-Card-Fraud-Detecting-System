const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/components/Navigation.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'components', 'Navigation.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'routes', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'routes', 'Login.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'routes', 'home.html'));
});

app.get('/settings', (req, res) => {
  res.sendFile(path.join(__dirname, 'routes', 'settings.html'));
});

app.get('/history', (req, res) => {
  res.sendFile(path.join(__dirname, 'routes', 'History.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
