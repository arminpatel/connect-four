import logo from "./assets/logo.svg"
import boardBlack from "./assets/board-layer-black-large.svg";
import boardWhite from "./assets/board-layer-white-large.svg";
import player1Icon from "./assets/player-one.svg"
import player2Icon from "./assets/player-two.svg"

const Game = () => {
    return (
        <div className="game-container">
            <div className="head">
                <button className="head-btn"> MENU </button>
                <img src={ logo } />
                <button className="head-btn"> RESTART </button>
            </div>
            <div className="board-players">
                <div className="player-1">
                    <div className="score-card">
                        <img className="player-icon" src={player1Icon} />
                        <h3>Player 1</h3>
                        <div className="player-1-score">0</div>
                    </div>
                </div>
                <div className="board">
                    <img src={ boardBlack } className="img-board-black" />
                    <img src={ boardWhite } className="img-board-white"/>
                </div>
                <div className="player-2">
                    <div className="score-card">
                        <img className="player-icon" src={player2Icon} />
                        <h3>Player 2</h3>
                        <div className="player-2-score">0</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game;