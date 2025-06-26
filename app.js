const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [
    { id: 1, name: 'João' },
    { id: 2, name: 'Maria' }
];

// GET - listar todos os usuários
app.get('/users', (req, res) => {
    res.json(users);
});

// GET - buscar usuário por ID
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(u => u.id === parseInt(id));
    if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.json(user);
});

// DELETE - remover usuário por ID
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(u => u.id === parseInt(id));
    if (userIndex === -1) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    users.splice(userIndex, 1);
    res.status(204).send(); // No Content
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
