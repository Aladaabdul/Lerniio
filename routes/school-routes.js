const schoolRouter = require('express').Router();
const schoolController = require('../controllers/school-controller')


schoolRouter.post('/', schoolController.createSchool)
schoolRouter.get('/', schoolController.getschool)
schoolRouter.get('/schoolname/:name', schoolController.getbyschoolname)
schoolRouter.get('/schooltype/:type', schoolController.getbyschooltype)
schoolRouter.get('/schoolfullname/:name', schoolController.getbyschoolfullname)






module.exports = schoolRouter