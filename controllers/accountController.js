const Account = require("../models/accountModel");

const accountController = () => {
  const postAccount = (req, res) => {
    const account = new Account(req.body);
    if (!req.body.bankName) {
      return res.status(400).send("bankName is required!");
    }
    if (!req.body.bankBranch) {
      return res.status(400).send("bankBranch is required!");
    }
    if (!req.body.accountName) {
      return res.status(400).send("accountName is required!");
    }
    if (!req.body.accountNumber) {
      return res.status(400).send("accountNumber is required!");
    }
    if (!req.body.accountType) {
      return res.status(400).send("accountType is required!");
    }
    account.save((err, account) => {
      if (err) {
        return res.status(400).send(`Problem saving account! ${err}`);
      }
      res.status(201).json(account);
    });
  };
  const getAccount = (req, res) => {
      
  };

  return { postAccount, getAccount };
};

module.exports = accountController;
