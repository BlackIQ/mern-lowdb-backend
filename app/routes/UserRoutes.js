const express = require("express");
const controllers = require("../controllers/UserControllers");

const router = express.Router();

router.get('/search/:search', controllers.searchUsers);

router.get('/get/:uid', controllers.getUser);
router.post('/add', controllers.addUser);
router.delete('/delete', controllers.deleteUser);
router.put('/update', controllers.updateUser);

module.exports = router;