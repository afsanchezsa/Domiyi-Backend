const Company = {
    getTableName() {
        return 'companies';
    },
    getId() {
        return 'id';
    }
    ,
    getIdStatus() {
        return 'idStatus';
    }
    ,
    getName() {
        return 'name';
    }
    ,
    getIdAdmin() {
        return 'idAdmin';
    }
    ,
    getCategory() {
        return 'category';
    },

    getDeliveryCost() {
        return 'deliveryCost';
    },
    getOfficceHours() {
        return 'officceHours';
    },
    getQuerySelectAll(){
        return 'select * from '+this.getTableName();
    },
    getQuerySelectById(Id) {
        return 'select * from ' + this.getTableName() + ' where ' + this.getId() + '=' + Id;
    },
    getQuerySelectIdStatusByCompany(companyName) {
        return 'select '+this.getIdStatus()  + ' from '+this.getTableName()+' where '+this.getName()+'='+companyName;
    },
    getQuerySelectByCompany(companyName){
        return 'select * from ' + this.getTableName() + ' where ' + this.getName() + '=' + companyName;
    },
    getQuerySelectIdAdminByCompany(companyName) {
        return 'select '+this.getIdAdmin()  + ' from '+this.getTableName()+' where '+this.getName()+'='+companyName;
    },
    getQuerySelectCategorynByCompany(companyName) {
        return 'select '+this.getCategory()  + ' from '+this.getTableName()+' where '+this.getName()+'='+companyName;
    },
    getQuerySelectDeliveryCostByCompany(companyName) {
        return 'select '+this.getDeliveryCost()  + ' from '+this.getTableName()+' where '+this.getName()+'='+companyName;
    },
    getQuerySelectOfficceHoursByCompany(companyName) {
        return 'select '+this.getOfficceHours()  + ' from '+this.getTableName()+' where '+this.getName()+'='+companyName;
    },
    getQuerygetIdByCompany(companyName){
        return 'select '+this.getId()  + ' from '+this.getTableName()+' where '+this.getName()+'='+companyName;
    },
    getQueryInsert(company){
        return 'CALL insertCompanies ('+company.name+','+company.idAdmin+','+company.category+','+company.deliveryCost+','+company.officceHours+')';
    }


}

module.exports = Company;