import mongoose from 'mongoose';

// User Config
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, },
  userid: { type: String },
  firstname: { type: String },
  lastname: { type: String},
  Phoneno: { type: Number },
  location: { type: String },
  startas: { type: String },
  Bio: { type: String },
  dob: { type: String },
  gender: { type: String },
  address: { type: String },
  type: { type: String },
  profilepic: { type: String },
  bloodgroup: { type: String },
  description: { type: String },
  services: { type: Object },
  edu: { type: Object },
  exp: { type: Object },
  language: { type: String },
  totalexp: { type: String },
  fees: { type: String },
  clinic: { type:String },
  password: { type: String, required: true, select: false },
  salt: { type: String, select: false },
  sessionToken: { type: String, select: false },
});

 export const UserModel = mongoose.model('savedUserofdoctors', UserSchema);

// User Actions
 export const getsavedUsers = () => UserModel.find();
 export const getsavedUserByEmail = (email) => UserModel.findOne({ email });
 export const getsavedUserBySessionToken = (sessionToken) => UserModel.findOne({sessionToken: sessionToken });
 export const getsavedUserById = (id) => UserModel.findById(id);
 export const createsavedUser = (values) => new UserModel(values).save().then((user) => user.toObject());
 export const deletesavedUserById = (id) => UserModel.findOneAndDelete({ _id: id });
 export const updatesavedUserById = (id, values) => UserModel.findByIdAndUpdate(id, values);