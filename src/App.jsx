import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Start from "./Start";
import Rules from "./Rules";
import Game from "./Game";

export function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Start /> } />
                    <Route path="/rules" element={ <Rules /> } />
                    <Route path="/game" element={ <Game />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}