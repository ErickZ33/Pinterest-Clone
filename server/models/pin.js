var mongoose = require('mongoose');
var Schema = mongoose.Schema
var User = mongoose.model('User')

var PinSchema = new mongoose.Schema({
    creator: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    },
    description: {
        type: String
    },
    comments: [{
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }],
    following: [{
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }],
    image: {
        type: String
    }},
    {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
        }
});

var Pin = mongoose.model('Pin', PinSchema);