import express from "express";
import * as attractionController from "../controllers/attraction-controllers.js";

const router = express.Router();

router
    .get('/:attractionId', attractionController.getSingleAttraction)

export default router;