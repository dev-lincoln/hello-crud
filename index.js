const { json } = require('express');
const express = require('express');
const app = express();
app.use(express.json());

const port = 3000
const usuarioFernando = {
    id: 1,
    nome: 'Fernando',
    idade: 35
};

const usuarios = [usuarioFernando];

app.get('/usuarios', (req, res) => {
    // res.send(JSON.stringify(usuarios))
    res.json(usuarios)
});

app.listen(3000, () => {
    console.log(`Server is up and running on port ${port}`)
});

