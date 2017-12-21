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
        user: [],
        activities: [],
        
        
    }

    
}

module.exports = user;