const express = require('express')
const router = express.Router();
const {generateCV} = require('../controllers/generator.controller')
router.post("/",generateCV );

module.exports = router