import express from 'express';

import { login, register,updatepassword } from '../controllers/authentication.js';

export default (router) => {
  router.post('/auth/register', register);
  router.post('/auth/login', login);
  router.post('/auth/updatepassword',updatepassword);
};
