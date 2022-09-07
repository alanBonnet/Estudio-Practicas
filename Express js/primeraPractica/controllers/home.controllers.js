const ctrlHome = {};

ctrlHome.getHome = (req, res) => {
    const {nombre} = req.query
    res.status(200).send({
        mesagge: "Holita rutados peticion GET"
    })
};
ctrlHome.postHome = (req, res) => {
    const {userName} = req.body;
    res.json({
        message: `Peticion POST en home ${userName}`
    })
}
module.exports = ctrlHome
