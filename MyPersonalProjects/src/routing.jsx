import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { HeaderComponent } from "./HeaderComponent/Header";
export function Routing() {
    return <BrowserRouter>
        <HeaderComponent />
        <div id="main">
            <Routes>
                <Route path="" element={ } />
                <Route path="" element={ } />
                <Route path="" element={ } />
                <Route path="" element={ } />
                <Route path="" element={ } />

            </Routes>
        </div>



    </BrowserRouter>
}