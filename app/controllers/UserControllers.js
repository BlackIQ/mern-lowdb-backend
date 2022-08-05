const { join } = require("path");
const lowDb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const file = join(__dirname, 'db.json');
const db = lowDb(new FileSync(file));

const info = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    res.status(200);
    res.send({
        "file_pwd": file,
    });
}

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
        id: `${lastUserId + 1}`,
    };

    db.get("users").push(newUser).write();

    res.status(200);
    res.send(newUser);
}

module.exports = {
    info,
    searchUsers,
    getUser,
    addUser,
}