import mongoose from 'mongoose';

// User Config
const UserSchema = new mongoose.Schema({
  userid: { type: String, required: true },
  name: { type: String },
  mob: { type: String},
  email: { type: String },
  doct: { type: String },
  department: { type: String },
  comment: { type: String },
});

 export const BookingModel = mongoose.model('bookings', UserSchema);

// User Actions
 export const getUsers = () => BookingModel.find();
 export const getUserByEmail = (email) => BookingModel.findOne({ email });
 export const getUserBySessionToken = (sessionToken) => BookingModel.findOne({sessionToken: sessionToken });
 export const getUserById = (id) => BookingModel.findById(id);
 export const createUser = (values) => new BookingModel(values).save().then((user) => user.toObject());
 export const deleteUserById = (id) => BookingModel.findOneAndDelete({ _id: id });
 export const updateUserById = (id, values) => BookingModel.findByIdAndUpdate(id, values);

