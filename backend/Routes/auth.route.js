import { Router } from "express";
import { signUp, logIn, validationRules, logOut, googleLogin } from "../Controllers/auth.controller.js";

export const authRouter = Router();


authRouter.post('/signup', validationRules, signUp);
authRouter.post('/login', logIn);
authRouter.get('/logout',logOut)
authRouter.post('/google/login', googleLogin); // Assuming you have a Google login route