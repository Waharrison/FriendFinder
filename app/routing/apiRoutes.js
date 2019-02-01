
app.get("/api/friends", function(req, res){
    res.json(friends)
});

app.post("/api/friends", function(){
    var newFriends = req.body;

    newFriends.name = newFriends.name.replace(/\s+/g, "").toLowerCase();
    friends.push(newFriends);
})