
const express = require('express')
const router = express.Router();
const user = require('../contollers/user-controller')

router.post('/signup', user.singupUser);

module.exports={
    router
}