const express = require('express');
const userController = require('./../controllers/userController')

const router = express.Router();

router.route('/user/')
    .get(userController.getAllUsers)
    .post(userController.postuser)

router.route('/user/:id')
    .get(userController.getuser)
    .patch(userController.updateuser)
    .delete(userController.deleteuser)

module.exports = router;
