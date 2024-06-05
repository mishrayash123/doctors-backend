
import  {createfeedback,getUfeedback} from '../db/feedback.js';



export const feedback = async (req, res) => {
    try {
      const {userid,
        doctorid,
        feedback,
        rating} = req.body;
      if (!userid) {
        return res.sendStatus(400);
      }


      const Booking  = await createfeedback({
        userid,
        doctorid,
        feedback,
        rating
      });
      return res.status(200).json(Booking).end();
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

  export const getAllfeedbacks = async (req, res) => {
    try {
      const users = await getUfeedback();
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };


 
