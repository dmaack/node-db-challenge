const express = require('express');
const Projects = require('../models/project-model');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        projects.map(project => {
            if(project.completed === 1) {
                 project.completed = "true"
            } else if(project.completed === 0) {
                project.completed = "false"
            }
            return res.status(200).json(projects)
        })
    })
    .catch(err => {
        res.status(500).json({ error: 'Failed to get Projects'})
    })
})

router.get('/:id/tasks', (req, res) => {
    const id = req.params.id;

    Projects.getTasksForProjects(id)
    .then(tasks => {
        tasks.map(task => {
            if(task.completed === 1) {
                task.completed = "true"
            } else if(task.completed === 0){
                task.completed = "false"
            }
            return res.status(200).json(tasks)
        })
    })
    .catch(err => {
        res.status(500).json({ error: `Failed to get tasks for project with ID ${id}`})
    })
})

router.post('/', (req, res) => {
    
})

router.post('/:id/tasks', (req, res) => {
    
})

module.exports = router;