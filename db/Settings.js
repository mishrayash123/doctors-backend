import mongoose from 'mongoose';

// User Config
const SettingsSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  fname: { type: String },
  lname: { type: String},
  city: { type: String },
  state: { type: String },
  zip: { type: String },
  address: { type: String },
  phone: { type: String },
  password: { type: String, required: true, select: false },
  salt: { type: String, select: false },
  sessionToken: { type: String, select: false },
});

 export const SettingsModel = mongoose.model('Settings', SettingsSchema);

// User Actions
 export const getUsers = () => SettingsModel.find();
 export const getUserByEmail = (email) => SettingsModel.findOne({ email });
 export const getUserBySessionToken = (sessionToken) => SettingsModel.findOne({sessionToken: sessionToken });
 export const getUserById = (id) => SettingsModel.findById(id);
 export const createUser = (values) => new SettingsModel(values).save().then((user) => user.toObject());
 export const deleteUserById = (id) => SettingsModel.findOneAndDelete({ _id: id });
 export const updateUserById = (id, values) => SettingsModel.findByIdAndUpdate(id, values);
