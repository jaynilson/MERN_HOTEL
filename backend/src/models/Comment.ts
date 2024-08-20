import exp = require("constants");
import mongoose, { Document, Schema } from "mongoose";
import User from "./User";

export interface IComment extends Document {
    user: Schema.Types.ObjectId;
    comment: string;
};


const CommentSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: User, required: true },
    Comment: { type: String, required: true },
});

export default mongoose.model<IComment>('Comment', CommentSchema);