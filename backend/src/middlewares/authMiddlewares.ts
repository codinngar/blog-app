import { Request, Response } from "express";
const User = require("../Models/UserModel");
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req: Request, res: Response) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err: Error, data: any) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user) return res.json({ status: true, user: user.username });
      else return res.json({ status: false });
    }
  });
};
