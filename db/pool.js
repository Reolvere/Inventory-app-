require("dotenv").config()
const { Pool } = require("pg")

module.exports = new Pool ({
    // connectionString: "postgresql://root:root1@localhost:5432/inventory"
    connectionString: process.env.DATABASE_URL
})