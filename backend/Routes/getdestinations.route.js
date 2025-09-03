import { Router } from "express";
import { getDestinations } from "../Controllers/getdestinations.controller.js";
export const getDestinationsRouter = Router();

getDestinationsRouter.get('/get', getDestinations);


