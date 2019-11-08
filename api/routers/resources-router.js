const express = require('express');
const Resources = require('../models/resource-model');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.getResources()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        res.status(500).json({ error: 'Failed to get resources'})
    })
})

router.post('/', (req, res) => {
    const newResource = req.body;

    Resources.addResource(newResource)
        .then(added => {
            res.status(201).json({ message: 'Success! You added a resource'})
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to add resource'})
        })
})


module.exports = router;