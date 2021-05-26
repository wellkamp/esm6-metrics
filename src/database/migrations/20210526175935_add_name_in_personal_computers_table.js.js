
exports.up = knex => {
    return knex.schema.alterTable("personal_computers", (table) => {
      table.string("name", 255).notNullable().after('memory')
    });
  };

exports.down = knex => {
    return knex.schema.alterTable('personal_computers', (table) => {
        table.dropColumn("name");
    });
};

