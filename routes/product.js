const express=require('express');
const router=express.Router();


const ProductController= require('../controllers/product.js');
router.get('/products',ProductController.getAll);
router.get('/products/price',ProductController.getByPrice) ;
router.get('/products/id',ProductController.getById) ;

module.exports= router;


