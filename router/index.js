import express from 'express';

import authentication from './authentication.js';
import setting from './settings.js';
import Booking from './Booking.js';


const router = express.Router();

export default () => {
  authentication(router);
  setting(router);
  Booking(router);
  return router;
};