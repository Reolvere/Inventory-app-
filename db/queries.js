const pool = require("./pool")

// get category from the database 
async function getCategory() {
    const {rows} = await pool.query("SELECT * FROM category")
    return rows
}

// get item from the database 
async function getItem() {
    const {rows} = await pool.query("SELECT * FROM item")
    return rows
}

// insert category in the database 
async function insertCategory(category) {
    await pool.query("INSERT INTO category (category) VALUES ($1)", [category])
}

// insert item in the database 
async function insertItem(item) {
    await pool.query("INSERT INTO item (item) VALUES ($1)", [item])
}

// delete item from the database 
async function deleteItem(itemId) {
    try {
        await pool.query("DELETE FROM item WHERE id = $1", [itemId]);
        console.log(`Item with ID ${itemId} deleted.`);
    } catch (error) {
        console.error("Error deleting item:", error);
        throw error;
    }
}

// delete category from the database 
async function deleteCategory(categoryId) {
    try {
        await pool.query("DELETE FROM category WHERE id = $1", [categoryId])
        console.log(`Item with ID ${categoryId} deleted`)
    } catch (error) {
        console.error("Error deleting item:", error)
        throw error
    }
}

// get category by id 
async function getCategoryById(id) {
    const result = await pool.query("SELECT * FROM category WHERE id = $1", [id])
    return result.rows[0]
}

// get item by id 
async function getItemById(id) {
    const result = await pool.query("SELECT * FROM item WHERE id = $1", [id])
    return result.rows[0]
}

// update category in the database 
async function updateCategory(id, newCategory) {
    return await pool.query("UPDATE category SET category = $1 WHERE id = $2", [newCategory, id])
}

// update item in the database 
async function updateItem(id, newName) {
    return await pool.query("UPDATE item SET item = $1 WHERE id = $2", [newName, id])
}

module.exports = {
    getCategory,
    getItem,
    insertCategory,
    insertItem,
    deleteItem,
    deleteCategory,
    getItemById,
    updateItem,
    getCategoryById,
    updateCategory,
}