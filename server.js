const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/game1', (req, res) => res.sendFile(path.join(__dirname, 'public', 'game1', 'index.html')));
app.get('/game2', (req, res) => res.sendFile(path.join(__dirname, 'public', 'game2', 'index.html')));

app.listen(PORT, () => console.log(`Game Arcade running on port ${PORT}`));
