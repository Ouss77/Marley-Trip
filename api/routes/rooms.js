import express from "express";
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from "../controllers/room.contr.js";
import { verifyAdmin } from "../utils/VerifyToken.js";
const router = express.Router();

//CREATE 
router.post('/:hotelid',verifyAdmin, createRoom )

//UPDATE
router.put('/:id',verifyAdmin, updateRoom)

//DELETE
router.delete('/:id', verifyAdmin, deleteRoom)

//GET
router.get('/:id',verifyAdmin, getRoom)

//GETALL
router.get('/', verifyAdmin, getAllRooms)
export default router