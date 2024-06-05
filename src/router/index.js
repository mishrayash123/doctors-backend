import express from 'express';

import authentication from './authentication.js';
import setting from './Settings.js';
import Booking from './Booking.js';
import feedback from './feedback.js';


const router = express.Router();

export default () => {
  authentication(router);
  feedback(router);
  setting(router);
  Booking(router);
  return router;
};