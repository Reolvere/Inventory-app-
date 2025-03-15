const Router = require("express")
const inventoryController = require("../controllers/inventoryControllers")
const inventoryRouter = Router()

inventoryRouter.get("/", inventoryController.inventoryListGet)
inventoryRouter.get("/category", inventoryController.categoryListGet)
inventoryRouter.get("/item", inventoryController.itemListGet)
inventoryRouter.get("/createCategory", inventoryController.createCategory)
inventoryRouter.get("/createItem", inventoryController.createItem)
inventoryRouter.post("/createCategory", inventoryController.categoryCreatePost)
inventoryRouter.post("/createItem", inventoryController.itemCreatePost)


module.exports = inventoryRouter