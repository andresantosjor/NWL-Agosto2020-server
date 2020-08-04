import express from 'express';

const app = express();

app.use(express.json());

// GET: Buscar
// POST: Criar
// PUT: Atualizar
// DELETE: Apagar

// Corpo (request.body): Dados para a criação ou atualização do registro
// Route Params (request.params): :id
// Query Params (request.query): ?page=2

app.get('/', (request, response) => {
    response.json({ message: "Hello World!" })
});

app.listen(3333);