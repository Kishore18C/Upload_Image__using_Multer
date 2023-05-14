import express from "express";
import multer from "multer";
import uploadImg from "../utils/multer.js";

import * as imageController from "../controller/image-controller.js";

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

// User
router.get("/images/:key", imageController.getAllImages);
router.post("/images", uploadImg, imageController.uploadImage);

export default router;
