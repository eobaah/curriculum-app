exports.up = knex =>
  knex.schema.createTable('checks', table => {
    table.timestamp('checked_at').defaultTo(knex.fn.now())
    table.string('type').notNullable().index() // skill | module | ?
    table.string('uuid').notNullable().index()
    table.string('user_id').notNullable().index()
    table.boolean('checked').notNullable()
    table.index(['type', 'user_id', 'uuid'])
  })

exports.down = knex =>
  knex.schema.dropTable('checks')

