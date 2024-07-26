import express from "express"
import { addCities, getAllCity } from "../controllers/citiesController.js"

const router = express.Router()

// Add cities
router.post("/addCities", addCities)
router.get("/getAllCity", getAllCity)

export default router