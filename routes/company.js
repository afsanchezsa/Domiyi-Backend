const express=require('express');
const router=express.Router();

const CompanyController= require('../controllers/company.js');

router.get('/companies',CompanyController.getAll);
router.get('/companies/company',CompanyController.getByCompany);

module.exports=router;
