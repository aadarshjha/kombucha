import jwt from "jsonwebtoken";

const secret = 'test';

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
    console.log(token);
    //const isCustomAuth = token.length < 500;

    //if (token && isCustomAuth) {      
    let decodedData = jwt.verify(token, secret);
    console.log(decodedData);

    //Need to update userID
    //req.userId = decodedData.id;
    // } else {
    //   decodedData = jwt.decode(token);

    //   req.userId = decodedData?.sub;
    // }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;