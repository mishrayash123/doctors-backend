import express from 'express';

import {Booking,getAllBookings,updateBooking} from '../controllers/Book.js';

export default (router) => {
  router.post('/book', Booking);
  router.post('/getallbookings', getAllBookings);
  router.patch('/updateBooking/:id',  updateBooking);
};
