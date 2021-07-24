class ContactController {
  index(request, response) {
    // Listar todos os registros
    response.send('Send from Contact Controller')
  }

  show() {
    // Obter um registro
  }

  store() {
    // Inserir um registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Excluir um registro
  }
}

module.exports = new ContactController();
