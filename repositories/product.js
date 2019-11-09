const connection=require('../Database-Utilities/Connection.js');
const ProductTable=require('../Database-Utilities/Products.js');
const Product=require('../models/Models').Product;
const Sequelize=require('sequelize');
const ProductRepository={
    async SelectAll(req,res){//we obtain all products
        /*connection.query(ProductTable.getQuerySelectAll(),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });*/
        try{
            const products=await Product.findAll({
                
                });
                res.json(products);
        }catch(e){
            console.log(e);
        }
            
    },
    //
    async SelectByPrice(req, res) {
       /* connection.query(ProductTable.getQuerySelectByPrice(req.body.price, req.body.price2),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });*/
        try{
            const products=await Product.findAll({
                where:{
                    price:{
                     [Sequelize.Op.between]:[req.body.price,req.body.price2]
                    }
                }
             });
             res.status(200).json(products);
        }catch(e){
            console.log(e);
            res.status(400).send("hubo un error");
        }
    },
    //
    async SelectByIdCompany(req, res) {
        try{
            product=await Product.findAll({
                
             where:{
                 idCompany:req.body.idCompany

                }
            });
            res.status(200).json(product);
        }catch(e){
            console.log(e);
            res.status(400).send("se produjo un error");
        }
        
        },
    async SelectCompanyByCategory(req, res) {
        try{
            product=await Product.findAll({
                attributes: ['idCompany'],
                where:{
                    idCategory:req.body.idCategory

                }
            });
            res.status(200).json(product);
        }catch(e){
            console.log(e);
            res.status(400).send("se produjo un error");
        }

    },
    //
    async SelectById(req, res) {
        /*connection.query(ProductTable.getQuerySelectById(req.body.id),(err,rows,fields)=>{
          if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }

        });*/
        try{
            product=await Product.findAll({

                where:{
                    id:req.body.id

                }
            });
            res.status(200).json(product);
        }catch(e){
            console.log(e);
            res.status(400).send("se produjo un error");
        }

    },



    async register(req,res){
        /*connection.query(ProductTable.getQueryInsert(req.body),(err,rows,fields)=>{

            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });*/
      try{
        product=await Product.create({
            //id:req.body.id,//si no se agrega se ejecuta el autoincrement en la bd
            idCompany:req.body.idCompany,
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            image:req.body.image,
            idStatus:req.body.idStatus,
            idCategory:req.body.idCategory
         
        });
        res.status(201).json(product);
      }catch(e){
          res.status(400).send("se produjo un error");
          console.log(e);
      }
    }
}
module.exports=ProductRepository;

