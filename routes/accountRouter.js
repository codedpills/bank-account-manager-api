const express = require('express');

const accountController = require('../controllers/accountController');
const Account = require('../models/accountModel');

const routes = () => {
    const accountRouter = express.Router();
    accountRouter
    .route('/account')
    .post(accountController.postAccount)
    .get(accountController.getAccounts);

    return accountRouter;
}

module.exports = routes;