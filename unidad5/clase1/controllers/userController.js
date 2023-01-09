const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { createToken, verifyToken } = require('../utils/jwt');
const db = require('../models');
module.exports = {
    login: async (req, res) => {
        console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            });
        }
        try {
            const user = await db.Users.findOne({
                where: {
                    email: req.body.email,
                },
            });
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const token = await createToken(user.id);
                    res.status(200).json({
                        user,
                        token,
                    });
                } else {
                    res.status(401).json({
                        msg: 'The password is incorrect',
                    });
                }

            } else {
                res.status(404).json({
                    msg: 'User not found',
                });
            }

        } catch (error) {
            res.status(500).json({
                msg: 'Please contact the administrator',
            });
        }

    },
    signup: async (req, res) => {
        console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            });
        }
        db.Users.findOne({
            where: {
                email: req.body.email,
            },
        })
            .then((possibleUser) => {
                if (possibleUser) {
                    res.status(409).json({ msg: 'User already exists' });
                } else {
                    db.Users.create({
                        nombre: req.body.nombre,
                        apellido: req.body.apellido,
                        email: req.body.email,
                        password: bcrypt.hashSync(req.body.password, 10),
                        rol:req.body.rol
                    })

                        .then(async (user) => {
                            const token = await createToken(user.id);
                            response = {
                                user: user.nombre,
                                apellido: user.apellido,
                                token: token
                            }
                            return res.status(200).json(response);
                        })
                        .catch((err) => res.status(500).json({
                            msg: `Please contact the administrator, Error: ${err.message}`,
                        }));
                }



            })
            .catch((err) => res.status(500).json(err));//findOne
    },
    userList: async (req, res) => {
        db.Users.findAll()
            .then((result) => {
                const response = {
                    status: 200,
                    message: 'OK',
                    data: result,
                };
                res.json(response);
            })
            .catch((error) => {
                res.json(error);
            });
    },
    userEdit: (req, res) => {
        console.log(req.body);
      const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({
                errors: errors.array(),
            });
        } else {
            const {
                nombre, apellido, rol
            } = req.body;
            const user = db.Users.findByPk(req.params.id);
          
            if (user !== '') {
                db.Users.update(
                    {
                      nombre,
                      apellido,
                      rol
                    },
                    {
                      where: {
                        id: req.params.id,
                      },
                    },
                  )
                  .then(() => {
                    const response = {
                      status: 200,
                      message: 'User updated successfully!',
                    };
                    res.json(response);
                  })
                  .catch((error) => {
                    res.json(error);
                  });
              
            } else {
                const response = {
                  status: 404,
                  message: 'User not found!',
                };
                res.json(response);
              }    
        }
    },
    getData: async (req, res) => {
        const id  = req.params.id;
        
        try {
            if (id) {console.log(id);
                const user = await db.Users.findOne({
                  where: {
                    id,
                  },
                });
                const {
                    nombre, apellido, rol
                  } = user;
                if (user) {
                    res.status(200).json({
                      msg: {
                        nombre,
                        apellido,
                        rol
                      },
                    });
                  } 
                  else {
                    res.status(404).json({
                      msg: 'User and credentials does not match',
                    });
                  } 
            }
            
                 
        } catch (error) {
          return res.status(500).json({
            msg: 'Please contact the administrator',
          });
        }

    }
}