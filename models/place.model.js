const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placesSchema = new Schema({
 name: String,
 type: {
     type: String,
     required: true,
     enum: ["coffee shop", "bookstore"],
    },
},
{
    timestamps: true,
});

//placesSchema.index({ location: '2dsphere' });


module.exports = mongoose.model('places', placesSchema);