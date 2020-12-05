/***********DOM SELECTION ************/
let content = document.querySelector(".content");
let options = document.querySelector(".answer");
let count = document.querySelector(".timer");
let score = document.querySelector(".score");
let playBtn = document.querySelector(".highscore>button");
let highscore = document.querySelector(".score");
let opt1 = document.querySelector(".option1");
let opt2 = document.querySelector(".option2");
let opt3 = document.querySelector(".option3");
let opt4 = document.querySelector(".option4");
let timer = 180;

const questions = {
  1: {
    q: "which programming language styles a webpage?",
    opts: ["html", "css", "javascript", "jquery"],
    ans: "css",
  },
  2: {
    q: "which of these is not a primitive data type?",
    opts: ["number", "string", "float", "boolean"],
    ans: "float",
  },
  3: {
    q: "Which of the following is not considered a JavaScript operator?",
    opts: ["new", "this", "delete", "typeof"],
    ans: "this",
  },
  4: {
    q: "Using ___ statement is how you test for a specific condition.",
    opts: ["if", "for", "select", "switch"],
    ans: "for",
  },
  5: {
    q: "The C in CSS stands for: ",
    opts: ["coding", "cursive", "cascading", "coded"],
    ans: "cascading",
  },
};

function startQuiz() {
  highscore.style.visibility = "hidden";
  options.style.visibility = "visible";
  content.textContent = questions[1].q;
  opt1.textContent = questions[1].opts[0];
  opt2.textContent = questions[1].opts[1];
  opt3.textContent = questions[1].opts[2];
  opt4.textContent = questions[1].opts[3];
  options.insertAdjacentElement("beforeend", opt1);
  options.insertAdjacentElement("beforeend", opt2);
  options.insertAdjacentElement("beforeend", opt3);
  options.insertAdjacentElement("beforeend", opt4);
  timerInt();
  runQuiz();
}

function timerInt() {
  setInterval(() => {
    timer--;
    count.textContent = "Time Left:" + timer;
  }, 1000);
}
function checkAns(target) {
  if (content.textContent === questions[1].q) {
    if (target.textContent === questions[1].ans) {
      correctAns();
    } else {
      wrongAns();
    }
  } else if (content.textContent === questions[2].q) {
    if (target.textContent === questions[2].ans) {
      correctAns();
    } else {
      wrongAns();
    }
  } else if (content.textContent === questions[3].q) {
    if (target.textContent === questions[3].ans) {
      correctAns();
    } else {
      wrongAns();
    }
  } else if (content.textContent === questions[4].q) {
    if (target.textContent === questions[4].ans) {
      correctAns();
    } else {
      wrongAns();
    }
  } else if (content.textContent === questions[5].q) {
    if (target.textContent === questions[5].ans) {
      correctAns();
    } else {
      wrongAns();
    }
  }
}
function correctAns() {
  highscore.textContent = "";
  let correct = document.createElement("h2");
  correct.textContent = "Correct Answer";
  highscore.insertAdjacentElement("afterbegin", correct);
  highscore.style.visibility = "visible";
  setInterval(() => {
    highscore.textContent = "";
    highscore.style.visibility = "hidden";
  }, 300);
  nextQ();
}
function wrongAns() {
  highscore.textContent = "";
  let correct = document.createElement("h2");
  correct.textContent = "Wrong Answer";
  highscore.insertAdjacentElement("afterbegin", correct);
  highscore.style.visibility = "visible";
  setInterval(() => {
    highscore.textContent = "";
    highscore.style.visibility = "hidden";
  }, 500);
  nextQ();
}
function nextQ() {
  if (content.textContent === questions[1].q) {
    content.textContent = questions[2].q;
    opt1.textContent = questions[2].opts[0];
    opt2.textContent = questions[2].opts[1];
    opt3.textContent = questions[2].opts[2];
    opt4.textContent = questions[2].opts[3];
    options.insertAdjacentElement("beforeend", opt1);
    options.insertAdjacentElement("beforeend", opt2);
    options.insertAdjacentElement("beforeend", opt3);
    options.insertAdjacentElement("beforeend", opt4);
    timerInt();
    runQuiz();
  } else if (content.textContent === questions[2].q) {
    content.textContent = questions[3].q;
    opt1.textContent = questions[3].opts[0];
    opt2.textContent = questions[3].opts[1];
    opt3.textContent = questions[3].opts[2];
    opt4.textContent = questions[3].opts[3];
    options.insertAdjacentElement("beforeend", opt1);
    options.insertAdjacentElement("beforeend", opt2);
    options.insertAdjacentElement("beforeend", opt3);
    options.insertAdjacentElement("beforeend", opt4);
    timerInt();
    runQuiz();
  } else if (content.textContent === questions[3].q) {
    content.textContent = questions[4].q;
    opt1.textContent = questions[4].opts[0];
    opt2.textContent = questions[4].opts[1];
    opt3.textContent = questions[4].opts[2];
    opt4.textContent = questions[4].opts[3];
    options.insertAdjacentElement("beforeend", opt1);
    options.insertAdjacentElement("beforeend", opt2);
    options.insertAdjacentElement("beforeend", opt3);
    options.insertAdjacentElement("beforeend", opt4);
    timerInt();
    runQuiz();
  } else if (content.textContent === questions[4].q) {
    content.textContent = questions[5].q;
    opt1.textContent = questions[5].opts[0];
    opt2.textContent = questions[5].opts[1];
    opt3.textContent = questions[5].opts[2];
    opt4.textContent = questions[5].opts[3];
    options.insertAdjacentElement("beforeend", opt1);
    options.insertAdjacentElement("beforeend", opt2);
    options.insertAdjacentElement("beforeend", opt3);
    options.insertAdjacentElement("beforeend", opt4);
    timerInt();
    runQuiz();
  } else {
    highscore.textContent = "Game Over";
    highscore.style.visibility = "visible";
  }
}

function runQuiz() {
  options.addEventListener("click", (e) => {
    checkAns(e.target);
  });
}

playBtn.addEventListener("click", startQuiz);
