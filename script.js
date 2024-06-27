const container = document.querySelector("#container");

function getPlayerScore() {
    if (localStorage.getItem("playerScore_game")) {
        return localStorage.getItem("playerScore_game");
    } else {
        localStorage.setItem("playerScore_game", 0);
        return 0;
    }
}

function getPcScore() {
    if (localStorage.getItem("pcScore_game")) {
        return localStorage.getItem("pcScore_game");
    } else {
        localStorage.setItem("pcScore_game", 0);
        return 0;
    }
}

function increasePlayerScore() {
    localStorage.setItem(
        "playerScore_game",
        Number(localStorage.getItem("playerScore_game")) + 1
    );
}

function increasePcScore() {
    localStorage.setItem(
        "pcScore_game",
        Number(localStorage.getItem("pcScore_game")) + 1
    );
}

function initializeStructure() {
    const initialStructure = `<div class="header">
                <div class="header-left">
                    <p class="heading">ROCK</p>
                    <p class="heading">PAPER</p>
                    <p class="heading">SCISSORS</p>
                </div>
                <div class="header-right">
                    <div class="score">
                        <p>
                            COMPUTER <br />
                            SCORE
                        </p>
                        <p id="computer-score">${getPcScore()}</p>
                    </div>
                    <div class="score">
                        <p>
                            YOUR <br />
                            SCORE
                        </p>
                        <p id="your-score">${getPlayerScore()}</p>
                    </div>
                </div>
            </div>
            <div id="play-area">
                <div class="play">
                    <div class="triangle-down">
                        <div class="inner-triangle"></div>
                    </div>

                    <div class="play-actions">
                        <div class="action rock" id="rock">
                            <div class="action-inside">
                                <img src="assets/rock.png" alt="" />
                            </div>
                        </div>
                        <div class="action scissors" id="scissors">
                            <div class="action-inside">
                                <img src="assets/scissors.png" alt="" />
                            </div>
                        </div>
                        <div class="action paper" id="paper">
                            <div class="action-inside">
                                <img src="assets/paper.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            `;

    container.innerHTML = initialStructure;
}

function initializeRulesBtn() {
    const rulesBtn = document.querySelector("#rules-btn");
    const rulesClose = document.querySelector("#rulesClose");
    const rules = document.querySelector("#rules");

    rulesBtn.addEventListener("click", () => {
        rules.classList.toggle("hidden");
    });
    rulesClose.addEventListener("click", () => {
        rules.classList.toggle("hidden");
    });
}

function initializePlayAgainBtn() {
    const playAgain = document.querySelector(".play-again");
    playAgain.addEventListener("click", () => {
        initializeStructure();
        initializeGame();
        initializeNextBtn();
    });
}

function nextBtnHandler() {
    renderWinningScreen();
    initializePlayAgainBtn();
    initializeNextBtn();
}
function initializeNextBtn(result) {
    const next = document.querySelector("#next");
    if (result === "WON") {
        next.classList.remove("hidden");
        next.addEventListener("click", nextBtnHandler, false);
    } else {
        // removing click event listner before adding event listner
        // so that only one event listner is added of next btn.
        next.removeEventListener("click", nextBtnHandler, false);
        next.classList.add("hidden");
    }
}

function initializeGame() {
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");

    rock.addEventListener("click", () => {
        const pc = pcMove();
        const result = wonOrLostOrTie("rock", pc);
        renderResult("rock", pc, result);
        initializePlayAgainBtn();
        initializeNextBtn(result);
    });

    paper.addEventListener("click", () => {
        const pc = pcMove();
        const result = wonOrLostOrTie("paper", pc);
        renderResult("paper", pc, result);
        initializePlayAgainBtn();
        initializeNextBtn(result);
    });

    scissors.addEventListener("click", () => {
        const pc = pcMove();
        const result = wonOrLostOrTie("scissors", pc);
        renderResult("scissors", pc, result);
        initializePlayAgainBtn();
        initializeNextBtn(result);
    });
}

function wonOrLostOrTie(user, pc) {
    const resultObj = {
        rock: {
            scissors: "WON",
            paper: "LOST",
        },
        paper: {
            scissors: "LOST",
            rock: "WON",
        },
        scissors: {
            rock: "LOST",
            paper: "WON",
        },
    };
    if (user === pc) {
        return false;
    }
    const result = resultObj[user][pc];
    if (result === "WON") {
        increasePlayerScore();
    } else if (result === "LOST") {
        increasePcScore();
    }
    return result;
}

function pcMove() {
    const move = ["rock", "paper", "scissors"];
    const pcMoveInd = Math.floor(Math.random() * 3 * 3) % 3;
    return move[pcMoveInd];
}

function getResultScreen(userMove, pcMove, result) {
    const resultScreen = `<div class="result">
    <div class="result-left">
        <p>YOU PICKED</p>
        <div class="action ${userMove}" style="width:140px;height:140px">
            <div class="action-inside" style="width:140px;height:140px">
                <img src="assets/${userMove}.png" alt="" />
            </div>
        </div>
    </div>
    <div class="result-middle">
        <p>${result ? "YOU " + result : "TIE UP"}</p>
        <p>${result ? "AGAINST PC" : "&nbsp;"}</p>
        <button class='play-again'>${result ? "PLAY AGAIN" : "REPLAY"}</button>
    </div>
    <div class="result-right">
        <p>PC PICKED</p>
        <div class="action ${pcMove}" style="width:140px;height:140px">
            <div class="action-inside" style="width:140px;height:140px">
                <img src="assets/${pcMove}.png" alt="" />
            </div>
        </div>
    </div>
    <div class="concentric-container ${
        result ? "" : "hidden"
    }" style="top: -20px;  ${result === "WON" ? " left:10px" : "right:10px"};">
        <div class="circle3">
            <div class="circle2">
                <div class="circle1"></div>
            </div>
        </div>
    </div>
</div>`;

    return resultScreen;
}

function renderWinningScreen() {
    const winningScreen = `<div class="winner-screen">
    <div class="stars-trophy">
        <img src="assets/stars.png" alt="" />
        <img class="trophy" src="assets/trophy.png" alt="" />
    </div>
    <p>HURRAY!!</p>
    <p>YOU WON THE GAME</p>
    <button class="play-again">PLAY AGAIN</button>
</div>`;
    container.innerHTML = winningScreen;
}

function renderResult(userMove, pcMove, result) {
    const playArea = document.querySelector("#play-area");
    const playerScore = document.querySelector("#your-score");
    const pcScore = document.querySelector("#computer-score");

    playerScore.textContent = getPlayerScore();
    pcScore.textContent = getPcScore();
    playArea.innerHTML = getResultScreen(userMove, pcMove, result);
}

function initializeApp() {
    initializeStructure();
    initializeRulesBtn();
    initializeGame();
}

document.addEventListener("DOMContentLoaded", () => {
    initializeApp();
});
