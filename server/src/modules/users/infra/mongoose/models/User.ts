import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
    lowercase: true,
  },
  password: {
    type: String,
    require: true,
    select: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', UserSchema);

export default User;
