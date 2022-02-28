// var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// for (i = 0; i < highScores.length; i++) {
//     var ls = document.createElement("ls");

//     ls.textContent = highScores[i];
//     var ul = document.getElementById("ul");
//     ul.appendChild(ls);
// }
var ulistEl = document.getElementById("ul");


var loadTasks = function () {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    if (!highScores) {
        return false;
    }
    console.log("Saved scores found!");

    // loop through savedTasks array
    for (var i = 0; i < highScores.length; i++) {

        var listEl = document.createElement("li");
        listEl.setAttribute("class", "list-group")
        listEl.innerHTML = "NAME: " + highScores[i].initials  + " SCORE: " + highScores[i].score;

        ulistEl.appendChild(listEl);
    }


};

loadTasks();
