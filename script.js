let points = document.getElementById("points");
let selectedP = document.getElementById("selectedP");
let selectedC = document.getElementById("selectedC");
let msg = document.getElementById("msg");
let clear = document.getElementById("end");

let randomNum = () => {
  let materials = ["stone", "paper", "scissors"];
  let randomValue = materials[Math.floor(Math.random() * 3)];
  return randomValue;
};

let getPlayerChoice = () => {
  let action = document.querySelectorAll(".game");
  action.forEach((element) => {
    element.onclick = () => {
      let playersChoice = element.getAttribute("value");
      getResult(playersChoice, randomNum());
      return playersChoice;
    };
  });
};
getPlayerChoice();

let getResult = (playerChoice, computerChoice) => {
  let score;
  if (playerChoice === computerChoice) {
    score = 0;
  } else if (playerChoice === "stone" && computerChoice === "scissors") {
    score = 1;
  } else if (playerChoice === "paper" && computerChoice === "stone") {
    score = 1;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    score = 1;
  } else {
    score = -1;
  }
  showResult(score, playerChoice, computerChoice);
  return score;
};

let showResult = (score, playerChoice, computerChoice) => {
  if (score === 0) {
    points.innerText = 0;
    msg.innerText = `Match Draw😐`;
  } else if (score == 1) {
    points.innerText = 1;
    msg.innerText = `You Won😍🤩`;
  } else {
    points.innerText = -1;
    msg.innerText = `You Lose🥺`;
  }
  selectedP.innerText = `Your's Choice ${playerChoice}`;
  selectedC.innerText = `Computer's Choice ${computerChoice}`;
};

let handleClear = () => {
  location.reload();
  points.innerText = "Score";
  selectedP.innerText = `Your's Choice`;
  selectedC.innerText = `Computer's Choice`;
  msg.innerText = `Win or Lose`;
};
