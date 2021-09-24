const express = require('express');
const app = express();
const path = require('path');


app.use(express.static('Public/img'));

app.get('/', function(req, res) {
    res.send('¡Bienvenido!');
});

app.listen(3030,() => console.log('Servidor corriendo'));

app.get('/babbage', function(req,res) {
    res.sendFile(path.join(__dirname, 'DH-Heroes/views/babbage.html'));
});

app.get('/berners-lee', function(req,res) {
    res.sendFile(path.join(__dirname, 'DH-Heroes/views/berners-lee.html'));
});

app.get('/clarke', function(req,res) {
    res.sendFile(path.join(__dirname, 'DH-Heroes/views/clarke.html'));
});

app.get('/clarke', function(req,res) {
    res.sendFile(path.join(__dirname, 'DH-Heroes/views/clarke.html'));
});

app.get('/hamilton', function(req,res) {
    res.sendFile(path.join(__dirname, 'DH-Heroes/views/hamilton.html'));
});

app.get('/hopper', function(req,res) {
    res.sendFile(path.join(__dirname, 'DH-Heroes/views/hopper.html'));
});

app.get('/lovelace', function(req,res) {
    res.sendFile(path.join(__dirname, 'DH-Heroes/views/lovelace.html'));
});

app.get('/turing', function(req,res) {
    res.sendFile(path.join(__dirname, 'DH-Heroes/views/turing.html'));
});




/// -> Debe direccionar al recurso index.html.
/*● /babbage -> Debe direccionar al recurso babbage.html
● /berners-lee -> Debe direccionar al recurso berners-lee.html.
● /clarke -> Debe direccionar al recurso clarke.html.
● /hamilton -> Debe direccionar al recurso hamilton.html.
● /hopper -> Debe direccionar al recurso hopper.html.
● /lovelace -> Debe direccionar al recurso lovelace.html.
● /turing-> Debe direccionar al recurso turing.html.*/