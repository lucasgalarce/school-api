import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userService from "../services/user.service";

export const generateToken = async (req, res) => {
  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  const { email, password } = req.body;

  if (!jwtSecretKey) {
    return res.status(400).send("JWT Secret not set");
  }

  if (!email || !password) {
    return res.status(400).send("email or password not set");
  }

  const user = await userService.getUserByEmail(email);
  const match = await bcrypt.compare(password, user.password);
  if (!match) res.send(403);

  const data = {
    time: Date(),
    email,
  };

  const token = jwt.sign(data, jwtSecretKey);

  res.send({ token });
};
