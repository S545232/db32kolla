var restaurant = require('../models/restaurant'); 
 
// List of all restaurant

exports.restaurant_list = async function(req, res) { 
    try{ 
        therestaurant = await restaurant.find(); 
        res.send(therestaurant); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
 
// for a specific restaurant. 
exports.restaurant_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: restaurant detail: ' + req.params.id); 
}; 
 
// Handle restaurant create on POST. 
exports.restaurant_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: restaurant create POST'); 
}; 
 
// Handle restaurant delete form on DELETE. 
exports.restaurant_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: restaurant delete DELETE ' + req.params.id); 
}; 
 
// Handle restaurant update form on PUT.
exports.restaurant_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await restaurant.findById( req.params.id)
 // Do updates of properties
 if(req.body.restaurantType)
 toUpdate.restaurantType = req.body.restaurantType;
 if(req.body.price) toUpdate.price = req.body.price;
 if(req.body.capacity) toUpdate.capacity = req.body.capacity;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

exports.restaurant_view_all_Page = async function(req, res) { 
    try{ 
        therestaurant = await restaurant.find(); 
        res.render('restaurant', { title: 'restaurant Search Results', results: therestaurant }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle restaurant create on POST. 
exports.restaurant_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new restaurant(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"restaurant_type":"goat", "cost":12, "size":"large"} 
    console.log('the first'+req.body.restaurantType)
    console.log('the second'+ req.body.price)
    document.restaurantType = req.body.restaurantType;
    console.log(document.restaurantType)
    document.price = req.body.price; 
    document.capacity = req.body.capacity; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

// for a specific restaurant.
exports.restaurant_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await restaurant.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
};


exports.restaurant_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('restaurantcreate', { title: 'restaurant Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

// Handle building the view for updating a restaurant. 
// query provides the id 
exports.restaurant_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await restaurant.findById(req.query.id) 
        console.log(result)
        res.render('restaurantupdate', { title: 'restaurant Update', toShow: result }); 
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.restaurant_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{
        result = await restaurant.findById(req.query.id) 
        res.render('restaurantdelete', { title: 'restaurant Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    }
};


exports.restaurant_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id);
    try {
        console.log('here');
      result = await restaurant.findById(req.query.id);
      res.render("restaurantdetail", { title: "restaurant Detail", toShow: result });
    } catch (err) {
      res.status(500);
      res.send(`{'error': '${err}'}`);
    }
  };


  exports.restaurant_delete = async function (req, res) {
    console.log("delete " + req.params.id);
    try {
      result = await restaurant.findByIdAndDelete(req.params.id);
      console.log("Removed " + result);
      res.send(result);
    } catch (err) {
      res.status(500);
      res.send(`{"error": Error deleting ${err}}`);
    }
  };
  
