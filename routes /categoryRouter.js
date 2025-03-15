const express = require("express")
const categoryRouter = express.Router()
const db = require("../db/queries")

// delete category
categoryRouter.delete("/category/:id/delete", async (req, res) => {
    // get id from url
    const categoryId = req.params.id

    try{
        // delete from the database 
        await db.deleteCategory(categoryId)
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
})

// edit category
categoryRouter.get("/category/:id/edit", async(req, res) => {
    // get id from the url 
    const categoryId = req.params.id
    
    // get category by id from the database 
    const category = await db.getCategoryById(categoryId)

    if(!category){
        return res.status(404).send("Category not found")
    }

    // render editCategory.ejs
    res.render("editCategory", {title: "Edit Category", category})
})

categoryRouter.post("/category/:id/update", async(req, res) => {
    const categoryId = req.params.id
    const {newCategory} = req.body

    try {
        await db.updateCategory(categoryId, newCategory)
        res.redirect("/category")
    } catch (error) {
        res.status(500).send("Error updating category")
    }

})

module.exports = categoryRouter