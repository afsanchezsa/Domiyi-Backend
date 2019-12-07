const TransactionRepository = require('../repositories/transaction');
const AuthorizationServer=require('../authentication/authorizationServer');
const TransactionController = {
    async getAll(req, res) {//get all products in database
        await TransactionRepository.SelectAll(req, res);
    },
    async register(req,res){//register a new company
        await TransactionRepository.register(req,res);
    }
}
module.exports = TransactionController;