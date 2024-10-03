/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('attractions', (table) => {
        table.increments('id').primary();
        table
            .integer('city_id')
            .unsigned()
            .references('id')
            .inTable('cities')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('attraction_name').notNullable();
        table.string('category').notNullable();
        table.text('description').notNullable();
        table.string('best_time_to_visit').notNullable();
        table.string('hours').notNullable();
        table.string('fee').notNullable();
        table.text('nearby_attraction').nullable();
        table.text('travel_tips').nullable();
        table.string('attraction_image_path').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('attractions');
};
