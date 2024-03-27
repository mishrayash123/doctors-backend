
import  {createUser,getUsers} from '../db/Booking.js';
import {BookingModel} from '../db/Booking.js'



export const Booking = async (req, res) => {
    try {
      const {userid, name,mob,comment,email,doct,department} = req.body;
      if (!userid) {
        return res.sendStatus(400);
      }


      const Booking  = await createUser({
        name,
        userid,
        mob,
        comment,
        email,
        doct,
        department
      });
      return res.status(200).json(Booking).end();
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

  export const getAllBookings = async (req, res) => {
    try {
      const users = await getUsers();
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };


  export const updateBooking = async (req, res) => {
    try {
      const { id } = req.params;
      const  data  = req.body;
      const updatedItem = await BookingModel.findByIdAndUpdate(id.trim(), data, {
        new: true,
      });
  
      if (!updatedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }
  
      return res.json(updatedItem);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }
