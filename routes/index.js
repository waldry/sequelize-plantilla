const { Router } = require("express");
const controllers = require("../controllers");

const router = Router();

router.get("/posts", controllers.getAllPosts);

router.post("/posts", controllers.createPost);

module.exports = router;
