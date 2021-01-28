import { Schema, model } from "mongoose";

const userSchemaDef = {
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  JWT: {
    type: String,
  },
};

const userSchema = new Schema(userSchemaDef);

export default model("User", userSchema);
