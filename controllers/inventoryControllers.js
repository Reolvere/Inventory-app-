const db = require("../db/queries")

// render index.ejs
exports.inventoryListGet = (req, res) => {
    res.render("index", {
        title: "inventory",
    })
}

// render categories
exports.categoryListGet = async (req, res) => {
    // get data out of database
    const category = await db.getCategory()
    console.log("Category: ", category)

    res.render("categoryView", {
        title: "Category list",
        categories: category
    })
}

// render items 
exports.itemListGet = async (req, res) => {
    // get data out of database
    const item = await db.getItem()
    console.log("Item: ", item)

    res.render("itemView", {
        title: "Item list", 
        items: item
    })
}

// render createCategory.ejs
exports.createCategory = (req, res) => {
    res.render("createCategory", {
        title: "Create Category"
    })
}

// render createItem.ejs
exports.createItem = (req, res) => {
    res.render("createItem", {
        title: "Create Item"
    })
}

// handle categoryCreate form
exports.categoryCreatePost = async (req, res) => {
    // get data out of form
    const { category } = req.body

    // insert data to the database
    await db.insertCategory(category)
    res.redirect("/");
}

// handle itemCreate form
exports.itemCreatePost = async (req, res) => {
    // get data out of form
    const { item } = req.body

    // insert data into database
    await db.insertItem(item)
    res.redirect("/");
}