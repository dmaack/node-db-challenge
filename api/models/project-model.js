const db = require('../../data/db.config');

module.exports = {
    getProjects,
    getProjectsById,
    getTasksForProjects,
    getResourcesForProject,
    addProject,
    addTask,
    addResourceToProject
}

function getProjects() {
    return db('projects')
}

function getProjectsById(id) {
    return db('projects')
    .where({id})
    .first()
}

function getTasksForProjects(id) {
    return db('projects')
    .join('tasks', 'projects.id', '=', 'tasks.project_id')
    .select('tasks.description', 'tasks.completed', 'projects.name', 'projects.description')
    .where({ project_id: id})
}

function getResourcesForProject(project_id) {
    return db('project_resources')
    .join('resources as r', 'r.id', '=', 'project_resources.resource_id')
    .select('r.name', 'r.description')
    .where({project_id})
}

function addProject(newProject) {
    return db('projects')
    .insert(newProject)
}


function addTask(newTask) {
    return db('tasks')
    .insert(newTask)
}

function addResourceToProject(newResource) {
    return db('project_resources')
    .insert(newResource)
}