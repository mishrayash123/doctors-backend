import express from 'express';

import { getAllUsers, deleteUser, updateUser } from '../controllers/Settings.js';
import { isAuthenticated, isOwner } from '../middlewares/index.js';

export default (router) => {
  router.post('/users', isAuthenticated, getAllUsers);
  router.delete('/deleteuser/:id', isAuthenticated, isOwner, deleteUser);
  router.patch('/updateusers/:id', isAuthenticated,  updateUser);
};
