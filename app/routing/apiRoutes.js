
var friends = require('../data/friends.js');

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    });

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var newFriendsScores = req.body.scores;
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;

        for (var i = 0; i < friends.length; i++) {
            var scoreDif = 0;

            for (var l = 0; l < newFriendsScores.length; l++) {
                scoreDif += (Math.abs(parseInt(friends[i].scores[l] - parseInt(newFriendsScores[l]))));
            }
            scoresArray.push(scoreDif);
        }

        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            }
        }

        var match = friends[bestMatch];
        res.json(match);
        friends.push(req.body);

    })

}