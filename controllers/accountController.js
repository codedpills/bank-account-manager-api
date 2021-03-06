const Account = require("../models/accountModel");

exports.postAccount = (req, res) => {
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
    return res.status(201).json(account);
  });
};

exports.getAccounts = (req, res) => {
  const query = {};
  if (req.query.accountType) {
    query.accountType = req.query.accountType;
  }
  Account.find(query, (err, accounts) => {
    if (err) {
      return res.status(400).send(`Problem fetching accounts! ${err}`);
    }
    return res.status(200).json(accounts);
  });
};

exports.findAccountById = (req, res, next) => {
  Account.findById(req.params.accountId, (err, account) => {
    if (err) {
      return res.send(err);
    }
    if (account) {
      req.account = account;
      return next();
    }
    return res.sendStatus(404);
  });
};

exports.getAccount = (req, res) => res.status(200).json(req.account);

exports.editAccount = (req, res) => {
  const { account } = req;
  account.bankName = req.body.bankName;
  account.bankBranch = req.body.bankBranch;
  account.accountName = req.body.accountName;
  account.accountNumber = req.body.accountNumber;
  account.accountType = req.body.accountType;
  account.save((err, account) => {
    if (err) {
      return res.status(400).send(err);
    }
    res.status(200).json(account);
  });
};

exports.deleteAccount = (req, res) => {
  req.account.remove((err) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(201).send("Account deleted successfully!");
  });
};
