const container = document.querySelector("#container");
const playArea = document.querySelector("#query-area");

const rulesBtn = document.querySelector("#rules-btn");
const rulesClose = document.querySelector("#rulesClose");
const rules = document.querySelector("#rules");

function initializeGame() {
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
                        <div class="action" id="rock">
                            <div class="action-inside">
                                <img src="assets/rock.png" alt="" />
                            </div>
                        </div>
                        <div class="action" id="scissors">
                            <div class="action-inside">
                                <img src="assets/scissors.png" alt="" />
                            </div>
                        </div>
                        <div class="action" id="paper">
                            <div class="action-inside">
                                <img src="assets/paper.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="rules-container hidden" id="rules">
                <div class="rules">
                    <p>Game Rules</p>
                    <ul>
                        <li>
                            Rock beats scissors, scissors beat paper, and paper
                            beats rock.
                        </li>
                        <li>
                            Agree ahead of time whether you’ll count off “rock,
                            paper, scissors, shoot” or just “rock, paper,
                            scissors.”
                        </li>
                        <li>
                            Use rock, paper, scissors to settle minor decisions
                            or simply play to pass the time
                        </li>
                        <li>
                            If both players lay down the same hand, each player
                            lays down another hand
                        </li>
                    </ul>
                </div>
                <div class="rules-close" id="rulesClose">X</div>
            </div>
            <div class="btns">
                <div class="btn" id="rules-btn">RULES</div>
                <div class="btn">NEXT</div>
            </div>`;
    container.innerHTML = initialStructure;
}

rulesBtn.addEventListener("click", () => {
    rules.classList.toggle("hidden");
});
rulesClose.addEventListener("click", () => {
    rules.classList.toggle("hidden");
});
