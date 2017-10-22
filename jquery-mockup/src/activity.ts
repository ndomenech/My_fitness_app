import * as $ from 'jquery';
declare const activityProperty: any;

function activityAdd(int: number) {
    var count = 1;
    var ul = document.getElementById("activityList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode( count.toString() ) );
    li.setAttribute("id", "element" + count ); // added line
    ul.appendChild(li);
    alert(li.id);
    count++;
  }