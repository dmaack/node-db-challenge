
exports.seed = function(knex, Promise) {
  return knex('tasks').truncate()
  .then(function () {
  return knex('tasks').insert([
    {project_id: 1, description: 'Look at designs for inspirtation',  notes: '', completed: false},
    {project_id: 1, description: 'Call Contractors for quotes', notes: '', completed: false},
    {project_id: 1, description: 'Ask friends if they have used people they would reccommend', notes: '', completed: false},
    
    {project_id: 2, description: 'Find days to get off work', notes: '', completed: false},
    {project_id: 2, description: 'Pick destination',  notes: '', completed: false},
    {project_id: 2, description: 'Book Flights',notes: '', completed: false},



    {project_id: 3, description: 'Vacuum Floors', notes: '', completed: false},
    {project_id: 3, description: 'Clean Windows', notes: '', completed: false},
    {project_id: 3, description: 'Wash Dishes', notes: '', completed: false},
  ]);
  })
};
