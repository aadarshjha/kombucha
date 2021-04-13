import jwt from "jsonwebtoken";
import User from "../models/user";

const secretUserName = 'secretValue';

interface controller {
  (
    req: Express.Request,
    res: Express.Response,
    next: (err: Error) => void
  ): void;
}


const auth: controller = async (req: any, _, next: any) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    const secret = await User.findOne({username: secretUserName});

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret.password);
      req.userId = JSON.parse(JSON.stringify(decodedData)).id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;