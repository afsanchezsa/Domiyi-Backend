const connection=require('../Database-Utilities/Connection.js');
const Transaction=require('../models/Transaction');
const Sequelize=require('sequelize');
const TransactionRepository={
    async SelectAll(req,res){
        try{
            const transactions=await Transaction.findAll({

            });
            res.json(transactions);
        }catch(e){
            console.log(e);
        }

    },
    async registerPayPal(req, res) {
        var transaction;
        try {
            transaction = await Transaction.create({
                //id:req.body.id,//si no se agrega se ejecuta el autoincrement en la bd
                idStatus: 1,
                paymentMethod: 2

            });
            const id = await sequelize.query("SELECT id * FROM transaction WHERE MAX(id)", {type: Sequelize.QueryTypes.SELECT});
            return id;
            res.status(201).json(id);
        } catch (e) {
            res.status(400).send("se produjo un error");
            console.log(e);
        }

    }
}
module.exports=TransactionRepository;