const mongoose = require('mongoose')
const Schema = mongoose.Schema



const schoolSchema = new Schema({
    schoolName: {
        type: String,
        unique: true,
        trim: true,
        // lowercase: true,
        required: [true, '  school name  is  required']
    },
    shortName: {
        type: String,
        default: '',  // Ensure shortName is unique
        unique: true,
    },

    schoolDescription: {
        type: String,
        trim: true,
        default: "school  description",
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
        trim: true
    },
    location: {
        type: String,
        default: '',
        //required: [true, "location is  required"],
        trim: true
    },
    vice_chancellor: {
        type: String,
        default: ''
    },
    year_of_establishment: {
        type: String,  // Assuming year can be stored as string
        trim: true,

    },

    url: {
        type: String,
        default: ''
    },
    courses: {

        type: Array,
        trim: true,
        default: [
            "Computer Science",
            "Electrical Engineering",
            "Medicine and Surgery",
            "Business Administration",
            "Mass Communication",
            "Law",
            "Accountancy",
            "Microbiology",
            "Political Science",
            "Chemical Engineering",
            "Economics",
            "Mechanical Engineering",
            "Biochemistry",
            "Civil Engineering",
            "Psychology",
            "Pharmacy",
            "Sociology",
            "English Language",
            "International Relations",
            "History and International Studies",
            "Geology",
            "Dentistry",
            "Architecture",
            "Industrial Chemistry",
            "Fine and Applied Arts",
            "Botany",
            "Physics",
            "Statistics",
            "Agriculture",
            "Educational Foundations",
            "Library and Information Science",
            "Food Science and Technology",
            "Medical Laboratory Science",
            "Pharmacology",
            "Physiology",
            "Anatomy",
            "Medical Physics",
            "Pathology",
            "Estate Management",
            "Public Health",
            "Clinical Pharmacy",
            "Agric Extension and Management",
        ],
        required: [true, " courses is required "]

    }
})

const School = mongoose.model('School', schoolSchema)

module.exports = School