'use strict';

var Twitter = require('twitter');
var async = require('async');
var Starred = require('../starred/starred.model');

var client = new Twitter({
    consumer_key: 'xiohrWQUpUrt3I9U0pRxMg',
    consumer_secret: 'Iv8L5hQ6cFJKooWXj22rRzN3jgZpDmOlHavzzXTvJLU',
    access_token_key: '635326275-SS5nx2AMGJAGORLgdzlOpfHnGIKvaciU44Wvqy9s',
    access_token_secret: 'pdxsd4yKfLIM8QUjySqpgOBlGPxsa9x9AyMCwTBsO04'
});

exports.index = function(req, res) {
    async.parallel({
        twits: function(callback){
            client.get('search/tweets.json', {'q': 'eCommerce,CRO'}, function(err, result) {
                callback(err, result);
            });
        },
        starred: function(callback){
            Starred.find({}, 'twit_id', function(err, result) {
                callback(err, result.map(function(i){
                    return i.twit_id;
                }));
            });
        }
    }, function(err, result){
        if (err) return handleError(res, err);
        result.twits.statuses.forEach(function(twit){
            twit.starred = result.starred.indexOf(twit.id) > -1;
        });

        res.json(200, result.twits);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}