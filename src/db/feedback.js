import mongoose from 'mongoose';

// User Config
const UserSchema = new mongoose.Schema({
  userid: { type: String, required: true, },
  doctorid: { type: String },
  feedback: { type: String},
  rating: { type:String },
  recommend: { type:String },
});

 export const UserModel = mongoose.model('feedbackofdoctorproject', UserSchema);

// User Actions
 export const getUfeedback = () => UserModel.find();
 export const getfeedbackByEmail = (email) => UserModel.findOne({ email });
 export const getfeedbackById = (id) => UserModel.findById(id);
 export const createfeedback = (values) => new UserModel(values).save().then((user) => user.toObject());
 export const deletefeedbackById = (id) => UserModel.findOneAndDelete({ _id: id });
 export const updatefeedbackById = (id, values) => UserModel.findByIdAndUpdate(id, values);