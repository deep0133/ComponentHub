const express = require('express');
const router = express.Router();
const user = require('../controller/user')
const auth = require("../middleware/auth")

router.post('/register', user.register);
router.post('/login', user.login);
router.post('/me', auth, user.My_profile);
router.put('/update', auth, user.Update_profile)
router.get('/logout', auth, user.logout)

module.exports = router;






