const express = require("express");
const controllers = require("../controllers/UserControllers");

const router = express.Router();

router.get('/search/:search', controllers.searchUsers);
router.get('/get/:uid', controllers.getUser);
router.post('/add', controllers.addUser);
router.post('/del', controllers.delUser);

module.exports = router;