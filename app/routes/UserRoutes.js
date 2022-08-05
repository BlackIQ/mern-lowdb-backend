const express = require("express");
const controllers = require("../controllers/UserControllers");

const router = express.Router();

router.get('/get/:search', controllers.getUsers);
router.post('/add', controllers.addUser);

module.exports = router;