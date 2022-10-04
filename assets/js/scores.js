//There is probably a cleaner way to do this, which I hope to investigate in the future
//This section works, but the timer score keeping doesn't work yet
function printHighScores() {
    var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
      highScores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highScores.forEach(function(score) {
      var liTag = document.createElement("li");
      liTag.textContent = score.initials + " - " + score.score;
  
      var ulEl = document.getElementById("highScores");
      ulEl.appendChild(liTag);
    });
  }
  
  function clearHighScores() {
    window.localStorage.removeItem("highScores");
    window.location.reload();
  }
  
  document.getElementById("clear-btn").onclick = clearHighScores;
  
  printHighScores();