// Update with your config settings.

module.exports = {

  
  development: {
    client: 'postgresql',
    connection: 'postgres://qucgjjglwdklfa:bfbee71de2cf52f4f0e7426e15e283193ca3a7e9a7cb60b3a6c992565bbfbe02@ec2-34-230-231-71.compute-1.amazonaws.com:5432/d33boe74hm0svv',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations'
    }
  },
  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './src/database/db.sqlite'
  //   },
  //   migrations:{
  //     directory: './src/database/migrations'
  //   },
  //   useNullAsDefault: true,
  // },
  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite'
    },
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: 'postgres://qucgjjglwdklfa:bfbee71de2cf52f4f0e7426e15e283193ca3a7e9a7cb60b3a6c992565bbfbe02@ec2-34-230-231-71.compute-1.amazonaws.com:5432/d33boe74hm0svv',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations'
    }
  }

};
