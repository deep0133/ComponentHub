const express = require('express');
const router = express.Router();
const code = require('../controller/code');
const Auth = require('../middleware/auth');

router.post('/add', Auth, code.addCode);
router.delete('/remove', Auth, code.removeCode);
router.get('/all', code.allCode);
// Not Used this API on frontend side --------------- Implementation pending on Frontend side--------------------
router.get('/user_component', Auth, code.specificUserCode);

module.exports = router;