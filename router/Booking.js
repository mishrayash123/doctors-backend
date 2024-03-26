import express from 'express';

import {Booking} from '../controllers/Book.js';

export default (router) => {
  router.post('/book', Booking);
};
