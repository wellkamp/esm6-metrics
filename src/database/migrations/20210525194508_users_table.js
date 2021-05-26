exports.up = knex => {
    return knex.schema.createTable("users", (table) => {
      table.increments("id").primary();
      table.string("email", 255).notNullable().unique();
      table.string("password", 255).notNullable().unique();
      table.timestamps(true, true);
    });
  };
  
exports.down = function (knex) {
    return knex.schema.dropTable("users");
};
