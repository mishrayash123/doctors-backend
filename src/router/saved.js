import express from 'express';

import {Save,deleteUser,getAllsavedusers} from '../controllers/saved.js';

export default (router) => {
  router.post('/getsaved', getAllsavedusers);
  router.post('/save', Save);
  router.delete('/deletesaved/:id',deleteUser);
};