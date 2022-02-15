import "./global.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Summaries from "./routes/summaries";
import Home from "./routes/home";
import NotFound from "./routes/notfound";
import Passwd from "./routes/passwd";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/summaries"} element={<Summaries/>}/>
            <Route path={'/passwd'} element={<Passwd/>}/>
            <Route path={"*"} element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);