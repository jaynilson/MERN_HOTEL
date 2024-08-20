import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Comments from "./components/Comments/Comment";

const App: React.FC = () => {
    return (

        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/comments" element={<Comments />} />
            </Routes>
        </Router>
    );
};


export default App;

