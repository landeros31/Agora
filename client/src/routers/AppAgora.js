import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function AppAgora() {
    return (
        <Router>
            <Route path="/agora">
                <h1>Agora</h1>
            </Route>
            <Route path="/administrador">
                <h1>Administrador</h1>
            </Route>
        </Router>
    );
}
