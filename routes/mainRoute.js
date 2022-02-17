const {Router} = require('express');
const {requireToken} = require('../middlewares/auth');
const mainController = require('../controllers/mainController');
const router = Router();


router.get('/login', mainController.getLogin);
router.post('/login', mainController.postLogin);
router.get('/', requireToken, mainController.getMainPage);
router.get('/logout', mainController.getLogOut);
router.post('/register', mainController.postRegister);

module.exports = router;