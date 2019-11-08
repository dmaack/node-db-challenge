const express = require('express');
const Projects = require('../models/project-model');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        let mappedProjects = projects.map(project => {
            if(project.completed === 1) {
                 project.completed = "true"
            } else {
                project.completed = "false"
            }
            return project
        })
        res.status(200).json(mappedProjects)
    })
    .catch(err => {
        res.status(500).json({ error: 'Failed to get Projects'})
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Projects.getProjectsById(id)
    .then(project => {
        if(project.completed === 1) {
            project.completed = "true"
        } else {
            project.completed = "false"
        }
           res.status(200).json(project)
    })
        
    .catch(err => {
        res.status(500).json({ error: `Failed to get project with id ${id}`})
    })
})

router.get('/:id/tasks', (req, res) => {
    const id = req.params.id;

    Projects.getTasksForProjects(id)
    .then(tasks => {
        let mappedTasks = tasks.map(task => {
            if(task.completed === 1) {
                task.completed = "true"
            } else {
                task.completed = "false"
            }
            return task
        })
        res.status(200).json(mappedTasks)
    })
    .catch(err => {
        res.status(500).json({ error: `Failed to get tasks for project with ID ${id}`})
    })
})

router.get('/:id/resources', (req, res) => {
    const id = req.params.id;

    Projects.getResourcesForProject(id)
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        res.status(500).json({ error: `Failed to get resources for prject with ID ${id}`})
    })
})

router.post('/', (req, res) => {
    const newProject = req.body;

    Projects.addProject(newProject)
    .then(added => {
        res.status(201).json({ message: 'Success! You added a Project'})
    })
    .catch(err => {
        res.status(500).json({ error: 'Failed to add new project'})
    })
})

router.post('/:id/tasks', (req, res) => {
    const id = req.params.id;
    const newTask = req.body;
    newTask.project_id = id;

    Projects.addTask(newTask)
    .then(added => {
        res.status(201).json({ message: `Success! You added a new task to the project with ID ${id}`})
    })
    .catch(err => {
        res.status(500).json({ error: 'Failed to add a new task to the project'})
    })
})

router.post('/:id/resources', (req, res) => {
    const id = req.params.id;
    const newResource = req.body;
    newResource.project_id = id;

    Projects.addResourceToProject(newResource)
    .then(added => {
        res.status(201).json({ message: `Success! You added a resource to project with id ${id}`})
    })
    .catch(err => {
        res.status(500).json({ error: 'Failed to add a new resource to the project'})
    })
})

module.exports = router;