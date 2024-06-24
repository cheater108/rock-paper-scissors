const container = document.querySelector("#container");
const playArea = document.querySelector("#play-area");

const result = `<div class="result">
                    <div class="result-left">
                        <p>YOU PICKED</p>
                        <div class="action rock">
                            <div class="action-inside">
                                <img src="assets/rock.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="result-middle">
                        <p>YOU LOST</p>
                        <p>AGAINST PC</p>
                        <button>PLAY AGAIN</button>
                    </div>
                    <div class="result-right">
                        <p>PC PICKED</p>
                        <div class="action paper">
                            <div class="action-inside">
                                <img src="assets/paper.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="concentric-container">
                        <div class="circle3">
                            <div class="circle2">
                                <div class="circle1"></div>
                            </div>
                        </div>
                    </div>
                </div>`;

const winningScreen = `<div class="winner-screen">
                <div class="stars-trophy">
                    <img src="assets/stars.png" alt="" />
                    <img class="trophy" src="assets/trophy.png" alt="" />
                </div>
                <p>HURRAY!!</p>
                <p>YOU WON THE GAME</p>
                <button class="play-again">PLAY AGAIN</button>
            </div>`;

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
                        <p id="computer-score">0</p>
                    </div>
                    <div class="score">
                        <p>
                            YOUR <br />
                            SCORE
                        </p>
                        <p id="your-score">0</p>
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

function initializeGame() {
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

document.addEventListener("DOMContentLoaded", () => {
    //initializeStructure();
    initializeGame();
});
