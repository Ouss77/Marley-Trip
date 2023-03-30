import User from "../Models/User.js";

export const updateUser= async (req, res, next) =>{
    try {
        const updateUser= await User.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true})
        res.status(200).json(updateUser)
    } catch (err) {
        res.status(500).json(err)
    } 
}
export const deleteUser= async (req, res, next) =>{
    try {
        const deleteUser= await User.findByIdAndDelete(
            req.params.id)
        res.status(200).json("User has been deleted")
    } catch (err) {
        res.status(500).json(err)
    } 
}
export const getUser= async (req, res, next) =>{
    try{
        const  getUser= await User.findById(
            req.params.id
        );
        res.status(200).json(getUser)
    }catch(err){
        next(err)
        //res.status(500).json(err)
    }
}
export const getAllUsers = async (req, res, next) =>{
    try{
        const getAllUsers = await User.find({});
        res.status(200).json(getAllUsers)
    }catch(err){
        res.status(500).json(err)
    }
}