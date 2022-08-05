const { join } = require("path");
const lowDb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const file = join(__dirname, 'db.json');
const db = lowDb(new FileSync(file));

const searchUsers = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const searchData = req.params.search;

    const users = db.get("users").value();
    const data = users.filter(user => user.name === searchData || user.surname === searchData || user.age === searchData || user.addr === searchData);

    res.status(200);
    res.send(data);
}

const getUser = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const uid = parseInt(req.params.uid);

    const users = db.get("users").value();
    const data = users.filter(user => user.id === uid);

    res.status(200);
    res.send(data[0]);
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

const deleteUser = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const uid = parseInt(req.body.uid);

    db.get("users").remove({id: uid}).write();

    res.status(200);
    res.send({
        message: "User delete",
    });
}

const updateUser = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const uid = parseInt(req.body.uid);
    const data = req.body.data;

    db.get("users").find({id: uid}).assign(data).write();

    res.status(200);
    res.send({
        message: "User updated",
    });
}

module.exports = {
    searchUsers,
    getUser,
    addUser,
    deleteUser,
    updateUser
}