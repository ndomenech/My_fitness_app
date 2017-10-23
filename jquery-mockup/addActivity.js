
function addActivity() {
    var list = document.getElementById('activityList');

    var activityObj = document.getElementsById("userExercise")
    var activity = activityObj.value
    var amountObj = document.getElementsById("userAmount")
    var amount = amountObj.value
    
console.log("User input"+activity+" , "+amount);

    var entry = document.createElement('li');

    entry.appendChild(document.createTextNode(activity+" , "+amount));
    list.appendChild(entry);
    
}

