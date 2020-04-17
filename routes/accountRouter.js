const express = require("express");

const accountController = require("../controllers/accountController");

const routes = () => {
  const accountRouter = express.Router();
  accountRouter
    .route("/accounts")
    .post(accountController.postAccount)
    .get(accountController.getAccounts);
  accountRouter.use("/accounts/:accountId", accountController.findAccountById);
  accountRouter
    .route("/accounts/:accountId")
    .get(accountController.getAccount)
    .put(accountController.editAccount)
    .delete(accountController.deleteAccount);

  return accountRouter;
};

module.exports = routes;
