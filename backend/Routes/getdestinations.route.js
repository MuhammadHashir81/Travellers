import { Router } from "express";
import { getDestinations } from "../Controllers/getdestinations.controller.js";
import { verifyToken } from "../Middleware/middleware.js";
export const getDestinationsRouter = Router();

getDestinationsRouter.get('/get', getDestinations);


