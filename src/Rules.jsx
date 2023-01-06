import { Link } from "react-router-dom";
import checkIcon from "./assets/icon-check.svg";

const Rules = () => {
    return (
        <div className="rules-parent">
            <div className="rules-cont">
                <h1 className="head"> RULES </h1>
                <h3 className="section-head"> OBJECTIVE </h3>
                <p> 
                    Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).
                </p>
                <h3 className="section-head"> HOW TO PLAY </h3>
                <div className="rules-list">
                    <div className="list-item">
                        <h4>1</h4><span>Red goes first in the first game.</span>
                    </div>
                    <div className="list-item">
                        <h4>2</h4><span>Players must alternate turns, and only one disc can be dropped in each turn.</span>
                    </div>
                    <div className="list-item">
                        <h4>3</h4><span>The game ends when there is a 4-in-a-row or a stalemate.</span>
                    </div>
                    <div className="list-item">
                        <h4>4</h4><span>The starter of the previous game goes second on the next game.</span>
                    </div>
                </div>
            </div>
            <Link to="/">
                <img className="check-img" src={ checkIcon } />
            </Link>
        </div>
    )
}

export default Rules;