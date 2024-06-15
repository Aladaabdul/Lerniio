const schoolRouter = require('express').Router();
const schoolController = require('../controllers/school-controller')


schoolRouter.post('/', schoolController.createSchool)
schoolRouter.get('/', schoolController.getschool)





module.exports = schoolRouter