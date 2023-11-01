let points = document.getElementById("points");
let selected = document.getElementById("selected");
let msg = document.getElementById("msg");
let clear = document.getElementById("end");

let randomNum = () => {
  let materials = ["Stone", "Paper", "Scissors"];
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
  } else if (playerChoice === "Stone" && computerChoice === "Scissors") {
    score = 1;
  } else if (playerChoice === "Paper" && computerChoice === "Stone") {
    score = 1;
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1;
  } else {
    score = -1;
  }
  showResult(score, playerChoice, computerChoice);
  return score;
};

let showResult = (score, playerChoice, computerChoice) => {
  if (score === 0) {
    msg.innerText = `Match Draw😐`;
  } else if (score == 1) {
    msg.innerText = `You Won😍🤩`;
  } else {
    msg.innerText = `You Lose🥺`;
  }
  points.innerText = `Your Score 👉🏻 ${score} `;
  selected.innerText = `${playerChoice} vs ${computerChoice}`;
};

let handleClear = () => {
  location.reload();
  points.innerText = "Score";
  selected.innerText = `Your's Choice`;
  msg.innerText = `Win or Lose`;
};

// let points = document.getElementById("points");
// let selectedP = document.getElementById("selectedP");
// let selectedC = document.getElementById("selectedC");
// let msg = document.getElementById("msg");

// let randomValue = () => {
//   let options = ["stone", "paper", "scissors"];
//   let randOptions = options[Math.floor(Math.random() * options.length)];
//   return randOptions;
// };

// let playerValue = () => {
//   let materials = document.querySelectorAll(".game");
//   materials.forEach((element) => {
//     element.onclick = () => {
//       let playerOption = element.getAttribute("value");
//       let computerChoice = randomValue();
//       gameOn(playerOption, computerChoice);
//     };
//   });
// };

// playerValue();

// let gameOn = (playerChoice, computerChoice) => {
//   let score;

//   if (playerChoice === computerChoice) {
//     score = 0;
//   } else if (
//     (playerChoice === "stone" && computerChoice === "paper") ||
//     (playerChoice === "paper" && computerChoice === "scissors") ||
//     (playerChoice === "scissors" && computerChoice === "stone")
//   ) {
//     score = -1;
//   } else {
//     score = 1;
//   }
//   gameResult(score, playerChoice, computerChoice);
//   return score;
// };

// let gameResult = (score, playerChoice, computerChoice) => {
//   if (score === 0) {
//     points.innerText = 0;
//     msg.innerText = "Match Draw";
//   } else if (score === -1) {
//     points.innerText = -1;
//     msg.innerText = "You Lose";
//   } else {
//     points.innerText = 1;
//     msg.innerText = "You Won";
//   }
//   selectedP.innerText = `Your's Choice ${playerChoice}`;
//   selectedC.innerText = `Computer's Choice ${computerChoice}`;
// };

// let handleClear = () => {
//   points.innerText = "Score";
//   msg.innerText = "Win or Lose";
//   selectedP.innerText = `Your's Choice`;
//   selectedC.innerText = `Computer's Choice`;
// };
