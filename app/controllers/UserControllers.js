const { join, dirname } = require("path");
const lowDb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const file = join(__dirname, 'db.json');

const db = lowDb(new FileSync(file));

// db.defaults({ notes: {} }).write();

const getUsers = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    await db.read();

    // console.log(db)

    const searchData = req.params.search;

    const data = await db.data;

    res.status(200);
    res.send({
        data,
    });
}

module.exports = {
    getUsers,
}