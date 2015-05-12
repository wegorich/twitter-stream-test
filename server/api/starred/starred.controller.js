'use strict';

var Starred = require('./starred.model');

// Get list of starreds
exports.index = function(req, res) {
  Starred.find(function (err, starreds) {
    if(err) { return handleError(res, err); }
    return res.json(200, starreds);
  });
};

// Creates a new starred in the DB.
exports.create = function(req, res) {
  Starred.create(req.body, function(err, starred) {
    if(err) { return handleError(res, err); }
    return res.json(201, starred);
  });
};

// Deletes a starred from the DB.
exports.destroy = function(req, res) {
  Starred.findOne({twit_id: req.params.id}, function (err, starred) {
    if(err) { return handleError(res, err); }
    if(!starred) { return res.send(404); }
    starred.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}