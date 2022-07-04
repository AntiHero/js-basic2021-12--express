import express from "express";

const logger = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log(req.url, " ", req.method);
  console.log("-------------------");
  next();
};

export default logger;
