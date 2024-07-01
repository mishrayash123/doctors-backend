import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: {type:String,required: true },
    otp:{type:String},
    createdAt: { type: Date, expires: '5m', default: Date.now },
});

 const Otp = mongoose.model('otp', UserSchema);

 export default Otp;
