const ctrlHome = {};

ctrlHome.getHome = (req, res) => {
    res.status(200).send({
        mesagge: "Holita rutados peticion GET"
    })
};
ctrlHome.postHome = (req, res) => {
    const {userName,aidi} = req.body;
    res.json({
        message: `Peticion POST en home ${userName} ${aidi}`
    })
}
module.exports = ctrlHome
