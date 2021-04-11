//import bcrypt from "bcryptjs";
//import jwt from "jsonwebtoken";

import User from "../models/user";

//const secret = 'test';

interface controller {
    (
      req: Express.Request,
      res: Express.Response,
      next: (err: Error) => void
    ): void;
  }

export const signin: controller = async (req: any, res: any, next: any) => {
    const { username, password } = req.body;
    //console.log("Im Here", username, password);
    //res.status(200).json({ result: username , token: "123123"});
    try {
        //if (await User.findOne({username: username}))
        const oldUser = await User.findOne({username: username});

        //if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

        // const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

        // if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        // const token = jwt.sign({ username: oldUser.username, id: oldUser._id }, secret, { expiresIn: "1h" });


        res.status(200).json({ result: oldUser, password: password, next: next, token: "1213123" });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const signup = async (req: any, res: any) => {
    const { username, password, Token } = req.body;
    //console.log(req.body);
    res.status(201).json({ result: username,password: password, token: Token });
    // try {
    //     const oldUser = await User.findOne({ email });

    //     if (oldUser) return res.status(400).json({ message: "User already exists" });

    //     const hashedPassword = await bcrypt.hash(password, 12);

    //     const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    //     const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "1h" });

    //     res.status(201).json({ result, token });
    // } catch (error) {
    //     res.status(500).json({ message: "Something went wrong" });

    //     console.log(error);
    // }
};