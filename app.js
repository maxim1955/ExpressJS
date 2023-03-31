"use strict";
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

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

app.post("/users/", async (req, res) => {
    try {
        const student = await Students.create(req.body)
        student.reload()
        return res.status(200).json(student)
    } catch (e) {
        return res.json(e)
    }
})
app.patch("/users/:id", async(req,res) => {

    try {

        const student = await Students.findByPk(req.params.id)

        if (student) {
            student.first_name = req.body.first_name;
            student.email = req.body.email;
            student.last_name = req.body.last_name
        }
        await student.save();

        return res.status(200).json(student);
    } catch (e) {
        return res.json(e);
    }
});
app.delete("/users/:id", async (req,res)=>{
    try{
        const student = await Students.findByPk(req.params.id);
        await student.destroy();
        return res.status(200).json();
    }catch (e){
        return res.json(e)
    }
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
    console.log(`Сервер запущен на ${port}`)

})
