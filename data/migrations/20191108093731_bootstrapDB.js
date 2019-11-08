
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments(); 

            tbl
                .string('name', 128)
                .notNullable()
            tbl
                .string('description', 255)
            tbl
                .boolean('completed')
                .defaultTo('false')
        })
        .createTable('resources', tbl => {
            tbl.increments();

            tbl
                .string('name', 128)
                .notNullable()
            tbl
                .string('description', 255)
        })
        .createTable('project_resources', tbl => {
            tbl.increments();

            tbl
                .integer('project_id')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl
                .integer('resource_id')
                .unsigned()
                .references('id')
                .inTable('resources')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
        .createTable('tasks', tbl => {
            tbl.increments();

            tbl
                .integer('project_id')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl
                .string('description', 255)
                .notNullable()
            tbl
                .string('notes', 255)
            tbl
                .boolean('completed')
                .defaultTo('false')
        })
};

exports.down = function(knex) {
    dropTableIfExists('projects');
    dropTableIfExists('resources');
    dropTableIfExists('project_resources');
    dropTableIfExists('tasks');
};
