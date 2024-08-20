import { Request, Response } from "express";
import Comment, { IComment } from "../models/Comment";
import User from "../models/Comment";

export const addComment = async (req: Request, res: Response) => {
  const { _id, text } = req.body;
  const comment = await Comment.create({
    user: _id, //I modified this code snippet
    text: text,
  });
  res.status(201).json(comment);
}; 


export const getComments = async (res: Response, req: Request) => {
  if (req.body.role === 'Admin') {    //how to implement this?
    const comment = await Comment.find().populate('user', 'username');
    res.json(comment);
  } else {
    const comment = await Comment.find({ user: req.body._id });//how to get the data User?
    res.json(comment);
  }
};