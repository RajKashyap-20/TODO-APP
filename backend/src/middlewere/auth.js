const auth =(req, res,next)=>{
    if(!req.session.user){
        return res.status(401).json({message:"Unsuthorized"})
    }
    next()
}
module.exports = auth;