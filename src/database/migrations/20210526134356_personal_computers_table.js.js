
exports.up = knex => {
    return knex.schema.createTable("personal_computers", (table) => {
      table.increments("id").primary();
      table.string("mainboard", 255).notNullable()
      table.string("core", 255).notNullable()
      table.string("gpu", 255).notNullable()
      table.string("memory", 255).notNullable()
      table.integer("user_id").unique().unsigned()
      table.foreign("user_id").references("users.id")
      table.timestamps(true, true);
    });
  };

  exports.down = function (knex) {
    return knex.schema.dropTable("personal_computers");
};

