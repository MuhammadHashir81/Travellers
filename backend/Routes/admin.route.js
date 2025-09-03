import { Router } from "express";
import { adminLogin } from "../Controllers/admin.controller.js";
import { adminLogOut } from "../Controllers/admin.controller.js";

export const adminRouter = Router()


adminRouter.post('/admin/login',adminLogin)
adminRouter.get('/admin/logout',adminLogOut)