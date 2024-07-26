import express from "express"
import { addCities, getAllCity, searchACity } from "../controllers/citiesController.js"

const router = express.Router()

// Add cities
router.post("/addCities", addCities)

// Display all cities
router.get("/getAllCity", getAllCity)

// Search a city
router.post("/searchACity", searchACity)

export default router