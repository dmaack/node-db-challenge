const db = require('../../data/db.config');

module.exports = {
    getProjects,
    getProjectsById,
    getTasksForProjects,
    addProject,
    addTask
}

function getProjects() {
    return db('projects')
}

function getProjectsById() {
    
}

function getTasksForProjects(id) {
    return db('projects')
    .join('tasks', 'projects.id', '=', 'tasks.project_id')
    .select('tasks.description', 'tasks.completed', 'projects.name', 'projects.description')
    .where({ project_id: id})
}

function addProject(newProject) {
    return db('projects')
    .insert(newProject)
}


function addTask(newTask) {
    return db('tasks')
    .insert(newTask)
}