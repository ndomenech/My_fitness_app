const activity = require("./activityList");
const meal = require("./mealList");


let iCurrenActivity = 0;
let iCurrentMeal = 0;

const user = {
    activity: activity,
    meal: meal ,
    getNextActivity: () => user.activityList[iCurrenActivity++],
    getNextMeal: () => user.mealList[iCurrentMeal++],
    room: {
        
        activityList: [{ exercise: "", WhatDid: "", calories: 0}],
        mealList: [{ meal: '', whatHad: "", calories: 0}]
        
    }

    
}

module.exports = user;