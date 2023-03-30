import Hotel from "../Models/Hotel.js";
import Room from "../Models/Room.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);
console.log(newRoom);
  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

export const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true })
        res.status(200).json(updatedRoom)
    } catch (err) {
        res.status(500).json(err)
    }
}
export const deleteRoom = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(
            req.params.id)
        res.status(200).json("Hotel has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
}
export const getRoom = async (req, res, next) => {
    try {
        const room = await Hotel.findById(
            req.params.id
        );
        res.status(200).json(room)
    } catch (err) {
        next(err)
    }
}
export const getAllRooms = async (req, res, next) => {
    try {
        const rooms = await Hotel.find({});
        res.status(200).json(rooms)
    } catch (err) {
        res.status(500).json(err)
    }
}
