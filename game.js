game = {
  getPlayer: function(decision) {
    this.getComputer();
    this.setPlayerImg(decision);
    switch (decision) {
      case "rock":
        // comp: paper
        if (x === 1) {
          console.log("comp wins");
          this.getScoreboardCompWin();
        } //comp: rock
        else if (x === 2) {
          console.log("draw");
        } //comp: scissors
        else {
          console.log("you win");
          this.getScoreboardPlayerWin();
        }
        break;
      case "paper":
        if (x === 1) {
          console.log("draw" + x);
        } else if (x === 2) {
          console.log("you win");
          this.getScoreboardPlayerWin();
        } else {
          console.log("comp wins");
          this.getScoreboardCompWin();
        }
        break;
      case "scissors":
        if (x === 1) {
          console.log("you win");
          this.getScoreboardPlayerWin();
        } else if (x === 2) {
          console.log("comp wins");
          this.getScoreboardCompWin();
        } else {
          console.log("draw");
        }
        break;
      default:
        alert("unknown error");
        break;
    }
  },
  visibility: function() {
    let hide = document.querySelector("#choice");
    hide.style.visibility = "hidden";
  },
  getComputer: function() {
    x = Math.floor(Math.random() * 3 + 1);
    let getBotImg = document.querySelector(".botGesture");
    getBotImg.innerHTML = '<img src="img/' + x + '.png" alt=""></img>';
  },

  setPlayerImg: function(decision) {
    let getPlayerImg = document.querySelector(".playerGesture");
    getPlayerImg.innerHTML =
      '<img src="img/' + decision + '.png" alt=""></img>';
  },
  player: 0,
  comp: 0,
  getScoreboardPlayerWin: function() {
    let setPlayerScore = document.querySelector("#playerScore");
    let playerWin = document.querySelector("#playerWin");
    let hideBot = document.querySelector(".bot");
    setPlayerScore.innerHTML = ++this.player;
    if (this.player === 10) {
      playerWin.innerHTML = "win";
      this.player = 0;
      this.comp = 0;
      hideBot.style.visibility = "hidden";
      this.visibility();
    }
  },
  getScoreboardCompWin: function() {
    let setCompScore = document.querySelector("#computerScore");
    let computerWin = document.querySelector("#computerWin");
    let hidePlayer = document.querySelector(".player");
    setCompScore.innerHTML = ++this.comp;
    if (this.comp === 10) {
      computerWin.innerHTML = "win";
      this.comp = 0;
      this.player = 0;
      hidePlayer.style.visibility = "hidden";
      hideBot.style.textAlign = "center";
      this.visibility();
    }
  }
};
