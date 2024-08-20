import mongoose, { Document, model, Schema } from "mongoose";


export interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  role: string;
}

const UserSchema: Schema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'Admin'], default: 'user' },
});

export default mongoose.model<IUser>('User', UserSchema);