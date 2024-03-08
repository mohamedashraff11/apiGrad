
import jwt from "jsonwebtoken"


export const verify=(req, res, next)=> {
  const authHeader = req.headers.token;
  if (authHeader) {
    jwt.verify(authHeader, "mohamed", (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      if(req.user = user){
        next();
      }
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
}

