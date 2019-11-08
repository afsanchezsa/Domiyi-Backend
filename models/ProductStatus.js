const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const ProductStatus=sequelize.define('productStatus',{
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true 
  },
status:{
    type:Sequelize.STRING,
    allowNull:false
}
},{
    timestamps:false,
    freezeTableName: true
});
module.exports=ProductStatus;