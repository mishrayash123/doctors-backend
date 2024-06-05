import express from 'express';

import {feedback,getAllfeedbacks} from '../controllers/feedback.js';

export default (router) => {
  router.post('/addfeedback', feedback);
  router.post('/getallfeedback', getAllfeedbacks);
};