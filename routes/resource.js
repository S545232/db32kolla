var express = require('express'); 
var router = express.Router(); 

// Require controller modules.
var api_controller = require('../controllers/api'); 
var restaurant_controller = require('../controllers/restaurant'); 
 
/// API ROUTE /// 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/restaurant', restaurant_controller.restaurant_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/restaurant/:id',restaurant_controller.restaurant_delete); 
 
// PUT request to update Costume. 
router.put('/restaurant/:id', 
restaurant_controller.restaurant_update_put); 
 
// GET request for one Costume. 
router.get('/restaurant/:id', restaurant_controller.restaurant_detail);
 
// GET request for list of all Costume items. 
router.get('/restaurant', restaurant_controller.restaurant_view_all_Page); 
 
module.exports = router;