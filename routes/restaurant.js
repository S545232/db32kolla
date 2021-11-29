var express = require('express');
const restaurant_controlers= require('../controllers/restaurant'); 
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => {
    console.log(req) 
    if (req.user){ 
      return next(); 
    }
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET home page. */
router.get('/', restaurant_controlers.restaurant_view_all_Page);

router.get('/detail', restaurant_controlers.restaurant_view_one_Page); 

router.get('/create',secured, restaurant_controlers.restaurant_create_Page); 

router.get('/update',secured,restaurant_controlers.restaurant_update_Page);

router.get('/delete',secured, restaurant_controlers.restaurant_delete_Page);

module.exports = router;