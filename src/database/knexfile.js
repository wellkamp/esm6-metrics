const path = require('path');

const development = {
  client: 'mysql',
  connection: 'mysql://root:wellk4mp@localhost:3306/jsmetrics',
  migrations: {
    directory: path.resolve(__dirname, 'migrations')
  }
}


const knex = {
  development,
}

module.exports = knex;