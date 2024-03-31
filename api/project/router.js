// build your `/api/projects` router here
const router = require('express').Router()
const Resources = require('./model')
const express = require('express')

router.post('/', async (req, res) => {
    try{
        const newResource = await Resources.add(req.body);
        res.status(201).json(newResource)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/', (req, res) => {
console.log('hello')
res.json({
    message: `Hello from api/projects`
})
})




router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'Something went wrong inside the project router',
        message: err.message,
        stack: err.stack, 
    })
})
module.exports = router 