const express = require('express');
const app = express();
const PORT = 3000;

//Middleware para permitir leitura de JSON em req.body
app.use(express.json());
app.get('/')

//BANCO DE DADOS EM MEMÓRIA
let produtos = [
    {
        id: 1,
        descricao: "Azeite de Oliva Extra Virgem 500ml",
        codigoBarras: "7891000245123",
        preco: 36.9,
        estoque: 80
    },
    {
        id:2,
        descricao: "Azeite de Oliva Extra Virgem Português 500ml",
        codigoBarras: "7891000245123",
        preco: 34.5,
        estoque: 120
    },
    {
        id:3,
        descontoPercentual: 15,
        motivo: "Festival de Gastronomia",
        validoAte: "2026-10-01"
    }

];

//ROTA 1: GET /alunos(listar todos os alunos) status 200 ok 
app.get('/produtos', (req, res) => {
    return res.status(200).json(produtos);
});

// 2. Rota para buscar um produto especifico pelo ID(parâmetro de rota)
app.get('/produtos/:id', (req, res) => {
    const { id } = req.params; //Extrai o ID da URL
    //Procura o produto no array em memória
    const produto = produtos.find(p => p.id == parseInt(id));
    //Caso o produto não exista, retorna 404 Not Found 
    if (!produtos) {
        return res.status(404).json({ mensagem: 'Produto não encontrado.' });
    }
    //Se existir, retorna 200 OK com os dados do produto encontrado 
    return res.status(200).json(produto);
});
// OBRIGATÓRIO: habilitar o parser de corpo JSON no Express
app.use(express.json());
app.post('/produtos', (req, res) => {
    const { descricao,codigoBarras, preco, estoque } = req.body;
    if (!descricao||!codigoBarras || preco=== undefined || estoque === undefined) {
        return res.status(400).json({ mensagem: 'Descricao, codigoBarras, preco e estoque são obrigatórios.' });
    }
    const novoProduto = {
        id: produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1,
        descricao,
        codigoBarras,
        preco: Number(preco),
        estoque: Number(estoque)
    };
    produtos.push(novoProduto);
    return res.status(201).json({
        mensagem: 'Produto cadastrado com sucesso!',
        produto: novoProduto
    });
});

//Rota para Atulizar um produto existente
app.put('/produtos/:id', (req, res) => {
    const { id } = req.params; //ID na URL
    const { descricao, codigoBarras, preco, estoque } = req.body;  //Novos dados no Body
    const index = produtos.findIndex(p => p.id == parseInt(id));
    if (index == -1) {
        return res.status(404).json({ mensagem: 'Produto não encontrado para atualização.' });
    }
    produtos[index] = {
        ...produtos[index],
        descricao: descricao || produtos[index].descricao,
        codigoBarras: codigoBarras || produtos[index].codigoBarras,
        preco: preco != undefined ? Number(preco) : produtos[index].preco,
        estoque: estoque != undefined ? Number(estoque) : produtos[index].estoque
    };
    return res.status(200).json({
        mensagem: 'Produto atualizado com sucesso!',
        produto: produtos[index]
    });
});

//rota para deletar um produto pelo ID 
app.delete('/produtos/:id', (req, res) => {
    const { id } = req.params;
    const index = produtos.findIndex(p => p.id == parseInt(id));
    if (index == -1) {
        return res.status(404).json({ mensagem: 'Produto não encontrado para exclusão.' });
    }
    produtos.splice(index, 1);
    return res.status(200).json({
        mensagem: `Produto com ID ${id} removido com sucesso!`
    });
});
// let produtos =[
// {
//     "descricao": "Azeite de Oliva Extra Virgem 500ml",
//     "codigoBarras": "7891000245123",
//     "preco": 36.9,
//     "estoque": 80
//  },
//  {
//     "descricao": "Azeite de Oliva Extra Virgem Português 500ml",
//     "codigoBarras": "7891000245123",
//     "preco": 34.5,
//     "estoque": 120
// },
// {
//     "descontoPercentual": 15,
//     "motivo": "Festial de Gastronomia",
//     "validoAte": "2026-10-01",
// }
// ];
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta 3000`);
    console.log(`http://localhost:${PORT}/produtos`);
});