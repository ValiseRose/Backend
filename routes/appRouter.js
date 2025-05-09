const Router = require("express");
const router = new Router();

const productRoutes= require("./productRoutes")
const categoryRoutes= require("./categoryRoutes")
const subcategoryRoutes= require("./subcategoryRoutes")
const permissionRoutes= require("./permissionRouter")
const userRoutes= require("./userRouter")
const clientAuthRoutes = require("./clientAuthRoutes"); 

router.use("/product",productRoutes)
router.use("/category",categoryRoutes)
router.use("/subcategory",subcategoryRoutes)
router.use("/permission",permissionRoutes)
router.use("/user",userRoutes)
router.use("/client", clientAuthRoutes);

module.exports = router;