const School = require('../model/School')


exports.createSchool = async (req, res, next) => {
    // const {
    //     schoolName,
    //     schoolDescription,
    //     shortName,
    //     year_of_establishment,
    //     vice_chancellor,
    //     url,
    //     schoolrequirement: {
    //         schoolsitting,
    //         jamb,
    //         postUtme,
    //     },
    //     location,
    //     schooltype,
    //     courses } = req.body
    // const createSchool = new School({
    //     schoolName,
    //     shortName,
    //     vice_chancellor,
    //     year_of_establishment,
    //     url,
    //     schoolDescription,
    //     schoolrequirement: {
    //         schoolsitting,
    //         jamb,
    //         postUtme,
    //     },
    //     location,
    //     schooltype,
    //     courses,
    // })

    try {
        console.log("Incoming request body:", req.body);
        const school = await School.create(req.body)
        if (school) {

            return res.status(201).json({
                message: "school  created ",
                data: school,

            })

        }

    }
    catch (error) {

        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ error: messages });
        } else {
            res.status(400).json({
                message: " error occured",
                Error: error.message
            })


        }



    }
}


exports.getschool = async (req, res, next) => {

    try {

        //  get all school  
        const getschool = await School.find().select('schoolName location shortName  courses schoolDescription ')
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



exports.getbyschoolname = async (req, res, next) => {
    const name = req.params.name.toLowerCase();

    try {

        const getschool = await School.findOne({ shortName: name })

        if (!getschool) {
            return res.status(200).json({
                message: 'school data not  found',

            })
        }
        return res.status(200).json({
            message: ' single school data found',
            data: getschool
        })

    }
    catch (error) {
        return res.status(400).json({
            message: " error occured",
            error: error.message
        })

    }

}



exports.getbyschooltype = async (req, res, next) => {
    const type = req.params.type.toLowerCase();

    try {

        const getschool = await School.find({ schooltype: type })

        if (!getschool) {
            return res.status(200).json({
                message: `${type} school data not  found`,

            })
        }
        return res.status(200).json({
            message: `${type} school data not  found`,
            data: getschool
        })

    }
    catch (error) {
        return res.status(400).json({
            message: " error occured",
            error: error.message
        })

    }

}
