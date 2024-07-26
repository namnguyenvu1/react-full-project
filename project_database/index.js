import express from "express"
import cors from "cors"
import citiesRouter from "./routes/cities.js"

const app = express()

app.use(cors())

app.use(express.json())

app.use("/api/cities", citiesRouter)

app.get("/test", (req, res) => {
    res.json("It works")
})

app.listen(8800, () => {
    console.log("Connected!")
})