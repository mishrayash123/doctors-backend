import mongoose from 'mongoose';

// User Config
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true,unique:true },
  firstname: { type: String },
  lastname: { type: String},
  Phoneno: { type: Number },
  location: { type: String },
  Bio: { type: String },
  dob: { type: String },
  gender: { type: String },
  address: { type: String },
  type: { type: String },
  Approved: { type: Boolean },
  profilepic: { type: String },
  bloodgroup: { type: String },
  description: { type: String },
  Available: { type: String },
  availability: { type: Object },
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

 export const UserModel = mongoose.model('Userofdoctorproject', UserSchema);

// User Actions
 export const getUsers = () => UserModel.find();
 export const getUserByEmail = (email) => UserModel.findOne({ email });
 export const getUserBySessionToken = (sessionToken) => UserModel.findOne({sessionToken: sessionToken });
 export const getUserById = (id) => UserModel.findById(id);
 export const createUser = (values) => new UserModel(values).save().then((user) => user.toObject());
 export const deleteUserById = (id) => UserModel.findOneAndDelete({ _id: id });
 export const updateUserById = (id, values) => UserModel.findByIdAndUpdate(id, values);


