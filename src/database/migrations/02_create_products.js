
exports.up = function(knex) {
    return knex.schema.createTable('product', function (table){
    table.integer('id').primary();
    table.string('name').notNullable();
    table.string('sku').notNullable();
    table.string('location').notNullable();
    table.string('order').notNullable();
    table.string('quantity').notNullable();

    table.foreign('location').references('id').inTable('shelves')
    })
};

exports.down = function(knex) {
    return  knex.schema.dropTable('product');
};
