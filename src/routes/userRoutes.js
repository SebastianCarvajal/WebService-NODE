const UserModel = require('../models/user');

module.exports = function (app) {

    app.get('/contactos', (req, res) => {
        UserModel.getUsers((err, data) => {
          res.json(data);
        });
    });

    app.post('/contactos', (req, res) => {
        console.log(req.query);
        var userData = {
          id: null,
          nombre: req.query.nombre,
          telefono: req.query.telefono,
          email: req.query.email
        };
        UserModel.insertUser(userData, (err, data) => {
          if (data && data.insertId) {
            res.status(200).json({
              success: true,
              msg: "Inserted a new user",
              data: data
            });
          } else {
            res.status(500).json({
              success: false,
              msg: "Error"
            });
          }
        });
    });

    app.put('/contactos', (req, res) => {
        console.log(req.query);
        const userData = {
            id: req.query.id,
            nombre: req.query.nombre,
            telefono: req.query.telefono,
            email: req.query.email
        };
        UserModel.updateUser(userData, function (err, data) {
          if (data && data.msg) {
            res.status(200).json({data});
          } else {
            res.status(500).json({
              success: false,
              msg: 'Error'
            });
          }
        });
      });

    app.delete('/contactos', (req, res) => {
        console.log(req.query);
        var id = req.query.id;
        UserModel.deleteUser(id, (err, data) =>  {
          if (data && data.msg === 'deleted' || data.msg == 'not Exists') {
            res.json({
              success: 'true',
              data
            });
          } else {
            res.status(500).json({
              msg: 'Error'
            });
          }
        });
    });
    
}