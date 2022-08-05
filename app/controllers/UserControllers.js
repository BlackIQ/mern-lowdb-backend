const getUsers = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const searchData = req.params.search;

    res.status(200);
    res.send({
        data: searchData,
    });
}

module.exports = {
    getUsers,
}