import express from "express";
import { countByCity, createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../controllers/hotel.contr.js";
import { verifyAdmin } from "../utils/VerifyToken.js";
const router = express.Router();

//CREATE 
router.post('/',verifyAdmin, createHotel )

//UPDATE
router.put('/:id',verifyAdmin, updateHotel)

//DELETE
router.delete('/find/:id', verifyAdmin, deleteHotel)

//GET
router.get('/find/:id',verifyAdmin, getHotel)

//GETALL
router.get('/', verifyAdmin, getAllHotels)

router.get('/countByCity', countByCity)
router.get('/countByType', getAllHotels)

export default router