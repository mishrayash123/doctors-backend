
import  {createUser} from '../db/Booking.js';



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
