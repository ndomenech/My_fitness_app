

const express = require("express");
const user = require("./userObject");

const router = express.Router();

router
    .get("/activity", (req, res) => res.send(user.activity))
    .get("/meal", (req, res) => res.send(user.getNextMeal()))
    .get("/room", (req, res) => res.send(user.room))
    
    
    .post("/room/mealList",(req, res) => {
        user.room.mealList.push(req.body);
        res.status(201).send(user.getNextMeal());
    })

    .post("/room/activityList",(req, res) => {
        user.room.activityList.push(req.body);
        res.status(201).send(user.getNextActivity());
    })

    
    .post("/room/user",(req, res) => {
        if(req.body.password == "password"){
            let aUser = user.room.user.find(x=> x.fbid == req.body.fbid);
            if(!aUser){
                aUser = { name: req.body.name, id: user.room.Members.length, fbid: req.body.fbid, picture: req.body.picture };
                user.room.Members.push(aUser);                
            }
            res.status(201).send(aUser);
        }else{
            res.status(403).send("Invalid Password");
        }
    })


module.exports.router = router;