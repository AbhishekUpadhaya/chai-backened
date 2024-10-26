import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express(); //initialising app



app.use(
  cors({
    //the origin option specifies which domain are allowed to access your API
    origin: process.env.CORS_ORIGIN,
    //this options allow cookies and HTTP authentication to be includede in cross - origin requests
    credentials: true,
  })
);

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter);

export { app };
