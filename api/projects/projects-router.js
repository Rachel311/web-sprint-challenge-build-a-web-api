// Write your "projects" router here!
const express = require('express');
const router = require('express').Router();
const Project = require('./projects-model');

const {
    validateProjectId,
    validateProject,
} = require('../projects/projects-middleware');


// Returns and array of all projects
router.get('/', (req, res, next) => {
   Project.get()
    .then((projects) => {
        res.json(projects);
    })
    .catch(next);
});

router.get('/:id', validateProjectId, (req, res) => {
    res.json(req.projects);
});

router.post('/', validateProject, (req, res) => {
    Project.insert({ name: req.name, description: req.description })
        .then((newProject) => {
            res.status(201).json(newProject);
        })
        .catch(next);
});

module.exports = router;