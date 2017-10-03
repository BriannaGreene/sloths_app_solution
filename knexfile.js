'use strict';

module.exports = {
  dev: {

  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/knex_sloths_test'
  },
  production: {}
};
