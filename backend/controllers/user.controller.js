const db = require("../models");
const User = db.user;

const utils = require("../utils");

const  bcrypt  =  require('bcrypt');
const  jwt  =  require('jsonwebtoken');


exports.newUser = async (req, res) => {

    const { username, password } = req.body;

    // Este caso podría controlarlo aquí, pero lo haremos desde el Front
    // if (!req.body.username || !req.body.password) {
    //     res.status(400).send({
    //         message: "Necesario especificar usuario y contraseña"
    //     });
    // }       

    // Validamos si el usuario ya existe en la BBDD
    const user = await User.findOne({ where: { username: username}});    
    if (user){
        return res.status(400).json({
            message: `Ya existe un usuario con el nombre ${username}`
        })
    }   

    const hashedPassword = await bcrypt.hash(password, 10);  
    // console.log(hashedPassword);

    try{
       // Guardamos el usuario en BBDD
       await User.create ({
            username: username,
            password: hashedPassword
       });
   
       res.json({
           message:  `Usuario ${username} creado correctamente` ,
           body: req.body
       });

    } catch (error){
        res.status(400).json({
            message: 'Ups! ocurrio un error al intentar crear el usuario.',
            error
        });
    } 

};

exports.loginUser = async (req, res) => {

    const { username, password } = req.body;    
    //console.log (req.body);

    //1.- Validamos si el usuario existe en la BBDD
    const user = await User.findOne({ where: { username: username}});
    if (!user){
        return res.status(400).json({
            message: `No existe un usuario con el nombre ${username} en la BBDD`
        });
    }

    //2.- Validamos password
    const passwordValid = await bcrypt.compare(password, user.password);
    // console.log(passwordValid);
    if (!passwordValid){
        return res.status(400).json({
            message: 'Usuario no se corresponde con password!'
        })
    }

    //3.- Generamos token
    const token = jwt.sign({
       username: username
    }, process.env.JWT_SECRET || 'alTernaTiva,123');

    res.json(token);

};
