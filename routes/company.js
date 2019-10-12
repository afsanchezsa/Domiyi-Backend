const express=require('express');
const router=express.Router();
const routerc=express.Router();

const CompanyController= require('../controllers/company.js');

router.get('/companies',CompanyController.getAll);
routerc.get('/companies/company',CompanyController.getByCompany);

module.exports=router;
module.exports=routerc;
