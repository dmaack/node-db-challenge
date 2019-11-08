
exports.seed = function(knex, Promise) {
  return knex('resources').truncate()
  .then(function () {
    return knex('resources').insert([
      {name: 'Houzz', description: 'Home deisgns and contractors'}, // 1
      {name: 'TripAdvisor', description: 'Site about travel and reviews'}, //2
      {name: 'Vacumm', description: 'In the closet'}, // 3
      {name: 'Windex', description: 'for window cleaning'}, // 4
      {name: 'Friends', description: 'advice'}, // 5
      {name: 'Soap', description: ''}, // 6
      {name: 'Trash Bag', description: ''}, // 7
      {name: 'Phone Book', description: 'for contact information'}, // 8
      {name: 'Aiplane', description: 'transporation'}, // 9
      {name: 'Google', description: 'Endless information'}, // 10
    ]);
  })
  

};
