import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Start from "./Start";
import Rules from "./Rules";

export function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Start /> } />
                    <Route path="/rules" element={ <Rules /> } />
                </Routes>
            </BrowserRouter>
        </div>
    )
}