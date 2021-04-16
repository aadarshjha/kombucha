import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user";

const tokenUserName = "tokenValue";
const secretUserName = "secretValue";

interface controller {
  (
    req: Express.Request,
    res: Express.Response,
    next: (err: Error) => void
  ): void;
}

export const signin: controller = async (req: any, res: any) => {
  const { username, password } = req.body;

  try {
    const oldUser = await User.findOne({ username: username });

    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    let secret = await User.findOne({ username: secretUserName });

    const token = jwt.sign(
      { username: oldUser.username, id: oldUser._id },
      secret.password,
      { expiresIn: "1hr" }
    );

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup: controller = async (req: any, res: any) => {
  const { username, password, Token } = req.body;
  try {
    let tokenValue = await User.findOne({ username: tokenUserName });

    if (tokenValue.password != Token)
      return res.status(400).json({ message: "Invalid Token" });

    const oldUser = await User.findOne({ username: username });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({ username, password: hashedPassword });

    const secret = await User.findOne({ username: secretUserName });

    const token = jwt.sign(
      { username: result.username, id: result._id },
      secret.password,
      { expiresIn: "1hr" }
    );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};

export const updateToken: controller = async (req: any, res: any) => {
  if (!req.userId) {
    return res.status(500).json({ message: "User Unauthenticated" });
  }

  const oldToken = req.body.body.oldToken;
  const newToken = req.body.body.newToken;

  try {
    let tokenValue = await User.findOne({ username: tokenUserName });

    if (tokenValue.password != oldToken)
      return res.status(400).json({ message: "Invalid Old Token" });

    await User.updateOne(
      { username: tokenUserName },
      { $set: { password: newToken } }
    );

    res.status(201).json({ message: "Token Updated" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

export const userAuth: controller = async (req: any, res: any) => {
  if (!req.userId) {
    return res.status(500).json({ message: "User Unauthenticated" });
  } else {
    res.status(201).json({ message: "Valid Token" });
  }
};
