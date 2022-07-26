module.exports = {
    getIndex: (req, res) => {
        res.send('home page');
    },
    postIndex: (req, res) => {
        res.send(req.params);
    },
    putIndex: (req, res) => {
        res.send({ user: req.query.user, password: req.query.password })
    },
    delIndex: (req, res) => {
        res.send({ id: req.params.id })
    }
}