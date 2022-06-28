const {Router} = require('express')
const PessoaController = require('../controllers/PessoaController.js')

const router = Router()


router
.get('/pessoas',PessoaController.pegaTodasAsPessoas)
.get('/pessoas/ativas', PessoaController.pegaPessoasAtivas)
.get('/pessoas/:id',PessoaController.pegaUmaPessoa)
.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)
.get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma)
.get('/pessoas/matricula/lotada', PessoaController.pegaTurmaLotadas)
.post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)
.post('/pessoas',PessoaController.criaPessoa)
.put('/pessoas/:id', PessoaController.atualizaPessoa)
.delete('/pessoas/:id',PessoaController.apagaPessoa)
.get('/pessoas/:estudanteId/matriculas/:matriculaId',PessoaController.pegaUmaMatricula)
.post('/pessoas/:estudanteId/matriculas', PessoaController.criaUmaMatricula)
.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura',PessoaController.restauraMatricula)
.put('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.atualizaMatricula)
.delete('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.apagaMatricula)


module.exports = router