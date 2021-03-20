const router = require('express').Router();
const path = require('path');

// importamos los routes
const homeRoute = require('./home');

// paths con su propio route
router.use('/home', homeRoute);

// path con retorno directo
router.route('/').get((req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname + '../../html/index.html'));
    // res.json(
    //     {   
    //         version: "0.0.1",
    //         paths: {
    //             autor :  "/autor",
    //             home :   "/home",
    //             status : "/health"
    //         }
    //     }
    //   );
})

router.route('/autor').get((req,res) =>{
    res.json(
        {
            author : "Dario Arias",
            servicio : "EKS en AWS"
        }
    )
})

router.route('/health').get((req,res) =>{
    res.json(
        {
            status : "OK",
        }
    )
})

module.exports = router;