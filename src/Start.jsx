import logo from "./assets/logo.svg"
import PvPIcon from "./assets/player-vs-player.svg"
import PvCIcon from "./assets/player-vs-cpu.svg"

const Start = () => { 
    return (
        <div className="menu">
            <div className="logo">
                <img src={ logo } />
            </div>
            <div className="menu-btn player-vs-cpu">
                PLAYER VS CPU
                <img src={ PvCIcon } />
            </div>
            <div className="menu-btn player-vs-player"> 
                PLAYER VS PLAYER
                <img src={ PvPIcon } />
            </div>
            <div className="menu-btn rules"> 
                GAME RULES
            </div>
        </div>
    )
}

export default Start;