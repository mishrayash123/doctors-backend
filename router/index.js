import express from 'express';

import authentication from './authentication.js';
import setting from './settings.js';


const router = express.Router();

export default () => {
  authentication(router);
  setting(router);
  return router;
};