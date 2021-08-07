import mongoose from "mongoose"

const postChema= mongoose.Schema({
    title : String,
    message : String,
    creator : String,
    tags : [String],
    selsctedFile : String,
    likeCount : {
        type : Number,
        default: 0
    },
    createdAt : {
        type : Date,
        default : new Date() 
    }

})

const PostMessage = mongoose.model('PostMessage',postChema)

export default PostMessage;