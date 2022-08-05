const { join } = require("path");
const lowDb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const file = join(__dirname, 'db.json');
const db = lowDb(new FileSync(file));

const getUsers = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const searchData = req.params.search;

    const data = await db.get("users");

    res.status(200);
    res.send(data);
}

const addUser = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const name = req.params.name;


}

module.exports = {
    getUsers,
    addUser,
}