
exports.up = function (knex) {
    return knex.schema.createTable('shelves', function (table) {
        // table.increments();
        table.string('id').notNullable();
        table.string('endereco').notNullable();
        table.string('description').notNullable();
        table.string('position').notNullable();



    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('shelves');
};
