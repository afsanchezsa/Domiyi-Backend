const CompanyRepository=require('../repositories/company.js');

const CompanyController={
    async getAll(req,res){
        await CompanyRepository.SelectAll(req,res);
    },

    async getByCompany(req,res){
        await CompanyRepository.SelectByCompany(req,res);
    }

}
module.exports=CompanyController;