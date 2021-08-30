import jwt  from 'jsonwebtoken'

const auth= async(req,res,next)=>{
    try {
        const token= req.headers.autorization.split(" ")[1];
        const isCostomAuth=token.length<500;

        let decodedData;

        if (token && isCostomAuth){
            decodedData=jwt.verify(token,'test');
            req.userId=decodedData?.id;
        } else{
            decodedData=jwt.decode(token);
            req.userId=decodedData?.sub;
        }
        next();
    } catch (error) {
        console.log(error);
    }
};

export default auth;