"use strict";

const express = require('express')
const app = express()
const port = 3000
const {User, Students} = require("./models/Users")

app.get('/users', async (req, res) => {
    const student = await Students.findAll({})
    return res.status(200).json({
        data: student
    })
});

app.get('/users/:id', async (req, res) => {
    const student = await Students.findByPk(req.params.id)
    return res.status(200).json({
        data: student
    })
})
app.listen(port, async () => {
    try {
        await Students.sync({
            alter: true,
            force: false,
        });

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log(`Example app listening on port ${port}`)

})
