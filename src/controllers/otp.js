import nodemailer from 'nodemailer';
import Otp from "../db/otp.js";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'growmorelimited@gmail.com',
    pass: 'YashMridul@786',
  },
});

const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const sendOtpEmail = async (email, otp) => {
  const mailOptions = {
    from: 'growmorelimited@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
  };

  await transporter.sendMail(mailOptions);
};

const storeOtp = async (email, otp) => {
  const newOtp = new Otp({
    email,
    otp,
  });
  await newOtp.save();
};

const sendOtp = async (email) => {
  const otp = generateOtp();
  await storeOtp(email, otp);
  await sendOtpEmail(email, otp);
};

export const otp = async (req, res) => {
    const {email } = req.body;

  try {
    await sendOtp(email);
    res.status(200).send('OTP sent successfully');
  } catch (error) {
    console.log(error)
    res.status(500).send('Error sending OTP');
  }
  }

  export const verify = async (req, res) => {
    const {email, otp } = req.body;

    try {
      const otpDoc = await Otp.findOne({email, otp });
  
      if (otpDoc) {
        res.status(200).send('OTP verified successfully');
      } else {
        res.status(400).send('Invalid or expired OTP');
      }
    } catch (error) {
      res.status(500).send('Error verifying OTP');
    }
  }

