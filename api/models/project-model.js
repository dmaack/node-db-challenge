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
    let query = db('projects as p')

    if(id) {
        query.where('p.id', id).first();

        const promises = [query, this.getTasksForProjects(id), this.getResourcesForProject(id)];

        return Promise.all(promises).then(results => {
            let [project, tasks, resources] = results;

            if(project) {
                project.tasks = tasks.map(task => {
                    if(task.completed === 1) {
                        task.completed = "true"
                    } else {
                        task.completed = "false"
                    }
                    return task
                });
                project.resources = resources;

                return project
            } else {
                return null
            }
        })
    }
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