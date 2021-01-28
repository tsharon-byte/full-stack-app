import bodyParser from "body-parser";
import { Router } from "express";
import User from "./user.model";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const router = Router();
const SALT = 10;
const SECRET_KEY = "SECRET_KEY";

router.route("/login").post(bodyParser.json(), async (request, response) => {
  const { email, password } = request.body;
  User.find({ email }).then((docs) => {
    if (docs.length < 1) {
      return response.status(500).json({ error: "Auth error" });
    }
    const user = docs[0];
    bcrypt.compare(password, user.password, function (error, result) {
      if (error) {
        return response.status(500).json({ error: error.message });
      }
      if (!result) {
        return response.status(500).json({ error: "Auth error" });
      }
      return response.status(200).json({ email: user.email, JWT: user.JWT });
    });
  });
});

router.route("/register").post(bodyParser.json(), async (request, response) => {
  const { email, password } = request.body;
  User.find({ email })
    .exec()
    .then((docs) => {
      if (docs.length > 0) {
        return response.status(500).json({ error: "User already exists" });
      }
      bcrypt.hash(password, SALT, function (error, hash) {
        if (error) {
          return response.status(500).json({ error: error.message });
        }
        const JWT = jwt.sign({ email }, SECRET_KEY, { expiresIn: "7d" });
        const user = new User({
          _id: mongoose.Types.ObjectId(),
          email,
          password: hash,
          JWT,
        });
        user
          .save()
          .then((doc) => {
            return response
              .status(201)
              .json({ email: doc.email, JWT: doc.JWT });
          })
          .catch((error) => {
            return response.status(500).json({ error });
          });
      });
    });
});

router.route("/").get(async (_, response) => {
  const users = await User.find();
  return response.status(200).json(users);
});

export default router;
