const School = require('../model/School')


exports.createSchool = async (req, res, next) => {
    const {
        schoolName,
        schoolDescription,
        schoolrequirement: {
            schoolsitting,
            jamb,
            postUtme,
        },
        courses } = req.body
    const createSchool = new School({
        schoolName,
        schoolDescription,
        schoolrequirement: {
            schoolsitting,
            jamb,
            postUtme,


        },
        courses,
    })

    try {

        const school = await createSchool.save()
        if (school) {
            return res.status(201).json({
                message: "school  created ",
                data: school
            })

        }


    }
    catch (error) {

        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            res.status(400).json({ messages }); res.status(400).json({
                message: " error occured",
                Error: error.message
            })

        }

        return res.status(400).json({
            message: " error occured",
            Error: error.message
        })

    }
}


exports.getschool = async (req, res, next) => {

    try {

        //  get all school  
        const getschool = await School.find().select('schoolName schoolDescription -id')
        return res.status(200).json({
            message: ' all  school data found',
            data: getschool
        })

    }
    catch (error) {
        return res.status(400).json({
            message: " error occured",
            Error: error.message
        })

    }

}
