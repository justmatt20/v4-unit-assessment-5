const express = require('express');
const bcrypt = require('bcryptjs');



module.exports = {
    register: async(req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const existingUser = await db.find_user_by_username({username: username})
        if (existingUser[0]){
            return res.status(400).send('Username already exists.')
        }
        let salt = bcrypt.genSaltSync(5)
        const hash = bcrypt.hashSync(password, salt)
        const newUser = await db.create_user({username, hash, profile_pic})
        req.session.user = newUser[0]
        res.status(201).send(req.session.user)
    },
    login: async (req, res) => {
        const db = req.app.get('db')
       const {username, password} = req.body

        const existingUser = await db.find_user_by_username({username})
        if (existingUser[0]) {
            return res.status(404).send('User not found')
        }
        const isAuth = bcrypt.compareSync(password, existingUser.password)
        if (!isAuth) {
            return res.status(404).send('Username or password is incorrect')
        }
        req.session.user = existingUser[0]
        return res.status(202).send(req.session.user)

    },
    logout: (req, res) => {
        req.session.destroy()
        return res.sendStatus(200)

    }
//     getUser: async (req, res) => {
//         const db = req.app.get('db')
//         const {username, password} = req.body
//         const notLoggedIn = await db.find_user_by_username({username: username})
        
//         if (loggedIn[0])

//     },
}
