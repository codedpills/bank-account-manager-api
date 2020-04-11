const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountModel = new Schema({
    bankName: String,
    bankBranch: String,
    accountName: String,
    accountNumber: {type: Number},
    accountType: {type: String, default: "Savings"}
});

module.exports = mongoose.model("Account", accountModel);