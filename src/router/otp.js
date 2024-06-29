
import {otp,verify} from '../controllers/otp.js';

export default (router) => {
  router.post('/sendotp',otp);
  router.post('/verifyotp', verify);
};