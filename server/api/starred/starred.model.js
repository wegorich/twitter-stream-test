'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StarredSchema = new Schema({
  twit_id: {type: Number, unique: true, required: true, dropDups: true},
  twit: {},
  created_at: {type: Date, default: Date.now},
  active: Boolean
});

module.exports = mongoose.model('Starred', StarredSchema);