
exports.seed = function(knex, Promise) {
  return knex('projects').truncate()
  .then(function () {
    return knex('projects').insert([
      {name: 'Remodel Patio', description: 'Start calling contractors and look at design ideas', completed: false},
      {name: 'Plan Next Vacation', description: 'Find dates on the calendar and research new countries we have not yet visited', completed: false},
      {name: 'Clean House', description: 'Clean the entire upper level', completed: false},
    ]);
  })

};