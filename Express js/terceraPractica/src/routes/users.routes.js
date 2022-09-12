const router = require('express').Router();
const { 
    getUsers,
    postUsers,
    putUsers,
    deleteUsers
 } = require('../controllers/user.controllers')

router.get('/' , (req, res) =>{
    
})
router.get('/user', getUsers )
// crea el nuevo usuario
router.post('/user', postUsers )
router.put('/user', putUsers )
router.delete('/user', deleteUsers )

module.exports = router;