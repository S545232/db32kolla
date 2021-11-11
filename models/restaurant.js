const mongoose = require("mongoose") 
const restaurantSchema = mongoose.Schema({ 
    restaurantType: String, 
    price: Number, 
    capacity: String 
}) 
 
module.exports = mongoose.model("Restaurant", 
restaurantSchema)