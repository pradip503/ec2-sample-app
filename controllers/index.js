const db = require('../config/db');

module.exports = {

    getData: async function(req, res){

        db.query("SELECT * FROM crud WHERE 1", [], async (error, results) => {
            if(error){
                res.render('website/home', {error: error})
            } else {
               res.render('website/home', {results})
            }
        });
    },

    insertData: function(req, res){
        // post data to 
        const {name, email, description} = req.body;
        var insertData  = "INSERT INTO crud(name, email, description) VALUES(?, ?, ?)";
        db.query(insertData, [name, email, description], (error, results) => {
            if(error) {
                res.render('website/home', {error: error});
            } else {
                res.redirect('/');
            }
        });
    },

    deleteData: function(req, res){
        const paramId  = req.params.id;
        var deleteData = "DELETE FROM crud WHERE id=?";

        db.query(deleteData, [paramId], (error, results) => {
            if(error) {
                res.render('website/home', {error: error});
            }

            if(results) {
                res.redirect('/');
            }
        })
    }
}