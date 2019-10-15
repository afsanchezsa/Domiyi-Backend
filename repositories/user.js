const express = require('express');
const connection = require('../Database-Utilities/Connection.js');
const UserTable = require('../Database-Utilities/Users.js');
const userRepository = {

    SelectAll(req, res) {

        connection.query(UserTable.getQuerySelectAll(), (err, rows, fields) => {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        });
    },
    register(req,res){
        connection.query(UserTable.getQueryInsert(req.body),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    }
}


module.exports = userRepository;

/*
    register(req,res){
        connection.query(ProductTable.getQueryInsert(req.body),(err,rows,fields)=>{

            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    }
 */