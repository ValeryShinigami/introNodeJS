//importation du module express
const express = require('express');

// on appelle la fonction express du module express
//qui a pour vocaton de creer une instance de serveur
const app = express();


//je cree la route GET
app.get('/contacts', function(req, res){
res.json({
    "status": "200",
    "message": "affiche la liste contacts"
    });
});

//je cree la route POST
app.post('/contacts', function(req, res){
    res.json({
        "status": "200",
        "message": "affiche la liste"
        });
});

//je cree la route GET
app.get('/contacts/:id', function(req, res){
    res.json({
        "status": "200",
        "message": `affiche le contact d'id ${req.params.id}`
        });
    });

//je cree la route PUT
app.put('/contacts/:id', function(req, res){
    res.send("PUT OK");
    });

//je cree la route DELETE
app.delete('/contacts/:id', function(req, res){
    res.send("delete OK");
    });    

//on vient de creer un API
app.listen(8000, () => {
    console.log("requete dispo à l'adresse http://localhost:8000/contacts");
});