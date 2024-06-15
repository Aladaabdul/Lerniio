const mongoose = require('mongoose')
const Schema = mongoose.Schema



const schoolSchema = new Schema({
    schoolName: {
        type: String,
        unique: true,
        trim: true,
        required: [true, '  school name  is  required']
    },
    shortName: {
        type: String,
        unique: true,
        required: [true, '  short name  is  required']
    },

    schoolDescription: {
        type: String,
        trim: true,
        required: [true, 'description is  required']

    },

    schoolrequirement: {
        schoolsitting: {
            type: String,
            trim: true,
            required: true,
            default: "minimum  of  5 credit  in wace/neco/gce "
        },
        jamb: {
            type: Number,
            trim: true,
            required: true,
            default: 200
        },
        postUtme: {
            type: Number,
            trim: true,
            required: [true, " postUtme score is required"],
            default: 60

        }

    },
    schooltype: {
        type: String,
        required: [true, "SchoolType is  required"],
        trim: true,
        default: "federal"
    },
    location: {
        type: String,
        required: [true, "location is  required"],
        trim: true
    },
    courses: {

        type: Array,
        trim: true,
        default: [],
        required: [true, " courses is required "]

    }
})

const School = mongoose.model('School', schoolSchema)

module.exports = School