const express = require("express");
const controllers = require("../controllers/UserControllers");

const router = express.Router();

router.get('/info', controllers.info);
router.get('/search/:search', controllers.searchUsers);
router.get('/get/:uid', controllers.getUser);
router.post('/add', controllers.addUser);

module.exports = router;