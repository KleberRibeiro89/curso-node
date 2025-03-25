const PessoaService = require("../services/pessoaService");

class pessoaController {
    pegarTodos(req, res) {

        let result = new PessoaService().pegarTodos();
        res.status(200).json(result)
    }
}

module.exports = pessoaController;