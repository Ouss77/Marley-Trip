import  express  from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.contr.js";
import { verifyAdmin, VerifyToken, verifyUser } from "../utils/VerifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", VerifyToken, (req, res, next) =>{
//     res.send("hello user, you are logged in")
// }) 
// router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
//     res.send("Hello user, you are logged in and you can delete your account")
// })
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
//     res.send("Hello ADMIN, you are logged in and you can delete all accounts")
// })

//UPDATE
router.put('/:id', verifyUser, updateUser)

//DELETE
router.delete('/:id', verifyUser, deleteUser)

//GET
router.get('/:id', verifyUser, getUser)

//GETALL
router.get('/', verifyAdmin, getAllUsers)
export default router