const express = require("express")
const app = express()
const path = require("path")
const inventoryRouter = require("./routes /inventoryRouter")
const itemsRouter = require("./routes /itemsRouter")
const categoryRouter = require("./routes /categoryRouter")

// set up ejs
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))

// parse form data
app.use(express.urlencoded({extended: true}))  

app.use("/", inventoryRouter)
app.use("/", itemsRouter)
app.use("/", categoryRouter)

const PORT = 5000

app.listen(PORT, () => console.log(`Express app is running on the port ${PORT}`))