import express from 'express';
import * as itineraryController from '../controllers/itinerary-controllers.js';
import { tripInputValidator } from '../middleware/middleware.js';

const router = express.Router();

router
    .post('/', tripInputValidator, itineraryController.generateItinerary);

export default router;
