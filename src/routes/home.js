const router = require('express').Router()

router.route('/').get((req, res) => {
  res.json(
    {   
        version: "0.0.1",
        paths: {
            autor :  "/autor",
            home :   "/home",
            status : "/health"
        }
    }
  );

})

module.exports = router

