import express from 'express';

import authentication from './authentication.js';
import setting from './Settings.js';
import Booking from './Booking.js';
import feedback from './feedback.js';
import saved from './saved.js';
import otp from './otp.js'

const router = express.Router();

export default () => {
  authentication(router);
  saved(router);
  feedback(router);
  setting(router);
  Booking(router);
  otp(router);
  return router;
};