import express from 'express';

import {Booking,getAllBookings} from '../controllers/Book.js';

export default (router) => {
  router.post('/book', Booking);
  router.post('/getallbookings', getAllBookings);
};
