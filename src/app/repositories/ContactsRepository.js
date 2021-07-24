const { uuid } = require('uuidv4')

const contacts = [
  {
    id: uuid(),
    name: 'John Doe',
    email: 'everton@gmail.com',
    phone: '555-555',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts))
  }
}

module.exports = new ContactsRepository;
