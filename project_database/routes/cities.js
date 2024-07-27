import express from "express"
import { addCities, getAllCity, searchACity, updateACity, deleteACity } from "../controllers/citiesController.js"

const router = express.Router()

// Add cities
router.post("/addCities", addCities)

// Display all cities
router.get("/getAllCity", getAllCity)

// Search a city
router.post("/searchACity", searchACity)

// Update a city
router.post("/updateACity", updateACity)

// Delete a city
router.post("/deleteACity", deleteACity)

export default router