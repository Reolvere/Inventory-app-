const express = require("express");
const itemsRouter = express.Router();
const db = require("../db/queries")

// delete item
itemsRouter.delete("/items/:id/delete", async (req, res) => {
    // get id from url
    const itemId = req.params.id;

    try {
        // delete item from the database 
        await db.deleteItem(itemId);  // Delete from database
        res.sendStatus(200);  // Success
    } catch (error) {
        res.sendStatus(500);  // Error
    }
});

// edit item 
itemsRouter.get("/items/:id/edit", async (req, res) => {
    // get id from the url 
    const itemId = req.params.id
    // get item by id from the database 
    const item = await db.getItemById(itemId)

    if(!item) {
        return res.status(404).send("Item not found")
    }

    // render editItem.ejs
    res.render("editItem", {title: "Edit Item", item})
})

// handle item update post 
itemsRouter.post("/items/:id/update", async (req, res) => {
    // get id from the url 
    const itemId = req.params.id
    // get data from the form 
    const {newName} = req.body

    try {
        // update item in the database 
        await db.updateItem(itemId, newName)
        res.redirect("/item")
    } catch (error) {
        res.status(500).send("Error updating item")
    }
})

module.exports = itemsRouter;