import mongoose from "mongoose"

const postChema= mongoose.Schema({
    title : String,
    message : String,
    name : String,
    creator : String,
    tags : [String],
    selectedFile : String,
    likes : {
        type : [String],
        default: []
    },
    comments: {
        type : [String],
        default: []
    },
    createdAt : {
        type : Date,
        default : new Date() 
    }

})

const PostMessage = mongoose.model('PostMessage',postChema)

export default PostMessage;