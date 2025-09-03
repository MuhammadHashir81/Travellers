import { Router } from "express";
import { deleteDestination, destinationUploadValidationRules,updateDestination,uploadDestination } from "../Controllers/admindestinationupload.controller.js";

import multer from "multer";
const upload = multer({ dest: 'uploads/' })

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()+file.originalname
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})



export const adminUploadRouter = Router();

adminUploadRouter.post('/upload', upload.single("image"),destinationUploadValidationRules, uploadDestination)
adminUploadRouter.put('/update/:id',upload.single("image"),destinationUploadValidationRules,updateDestination)
adminUploadRouter.delete('/delete/:id',deleteDestination)


