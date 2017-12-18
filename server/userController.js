const express = require("express");
const user = require("./userObject");

const router = express.Router();

router
    .get("/activity", (req, res) => res.send(user.activity))
    .get("/meal", (req, res) => res.send(user.getNextMeal()))
    .get("/room", (req, res) => res.send(game.room))
    .post("/room/picture",(req, res) => {
        game.room.picture = game.getNextPicture();
        game.room.quotes = [];
        res.status(201).send(game.room.picture);
    })
    .post("/room/mealList",(req, res) => {
        user.room.mealList.push(req.body);
        res.status(201).send(user.getNextMeal());
    })

    .post("/room/activityList",(req, res) => {
        user.room.activityList.push(req.body);
        res.status(201).send(user.getNextActivity());
    })

    .post("/room/quotes/choose",(req, res) => {
        const chosen = game.room.quotes[req.body.i];
        chosen.chosen = true;
        game.room.dealer = (game.room.dealer + 1) % game.room.players.length;
        res.status(201).send(chosen);
    })
    .post("/room/user",(req, res) => {
        if(req.body.password == "password"){
            let player = user.room.user.find(x=> x.fbid == req.body.fbid);
            if(!player){
                player = { name: req.body.name, id: user.room.players.length, fbid: req.body.fbid, picture: req.body.picture };
                user.room.players.push(player);                
            }
            res.status(201).send(player);
        }else{
            res.status(403).send("Invalid Password");
        }
    })


module.exports.router = router;