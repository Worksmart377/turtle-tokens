const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/API/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
router.post('/', usersCtrl.create);
router.post('/api/users/login', usersCtrl.login)

module.exports = router;