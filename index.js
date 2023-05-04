const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json())
const Port = process.env.PORT || 5000;

const data = require('./data/data.json')

app.get('/', (req, res) => {
    res.send('server runnig')
})

app.get('/cafe', (req, res) => {
    res.send(data);
})

app.get('/cafe/:id', (req, res) => {
    const id = parseInt(req.params?.id);
    const selectedRecipes = data?.find(c => c.id == id)
    res.send(selectedRecipes)
})

app.listen(Port, () => {
    console.log('server is running on port', Port)
})

module.exports = app;