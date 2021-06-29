const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router
    .get('/pessoas', PessoaController.pegaTodasAsPessoas)
    .post('/pessoas', PessoaController.criaPessoa)
    .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
    .put('/pessoas/:id', PessoaController.atualizaPessoa)
    .delete('/pessoas/:id', PessoaController.apagaPessoa)
    .get(
        '/pessoas/:estudanteId/matricula/:matriculaId',
        PessoaController.pegaUmaMatricula
    )
    .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
    .put(
        '/pessoas/:estudanteId/matricula/:matriculaId',
        PessoaController.atualizaMatricula
    )
    .delete(
        '/pessoas/:estudanteId/matricula/:matriculaId',
        PessoaController.apagaMatricula
    );

module.exports = router;
