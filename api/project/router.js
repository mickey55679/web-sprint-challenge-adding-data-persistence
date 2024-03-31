// build your `/api/projects` router here
const router = require('express').Router()
const express = require('express')



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