const { join } = require("path");
const lowDb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
// const { nanoid } = require("nanoid");

const file = join(__dirname, 'db.json');
const db = lowDb(new FileSync(file));

const getUsers = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const searchData = req.params.search;

    const data = db.get("users").value();

    res.status(200);
    res.send(data);
}

const addUser = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const data = req.body;

    const lastUserId = db.get("users").value().length === 0 ? 0 : db.get("users").last().value().id;

    const newUser = {
        ...data,
        id: lastUserId + 1,
    };

    db.get("users").push(newUser).write();

    res.status(200);
    res.send(newUser);
}

module.exports = {
    getUsers,
    addUser,
}