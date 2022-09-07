const router = require("express").Router();
const {
    getHome,
    postHome
} = require("../controllers/home.controllers");
router.get("/home", getHome);
router.post("/home", postHome);

module.exports = router;