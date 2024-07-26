import express from "express"
import { addCities } from "../controllers/citiesController.js"

const router = express.Router()

// Add cities
router.post("/addCities", addCities)

export default router