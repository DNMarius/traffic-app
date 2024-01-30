import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom"

import Acceuil from "./pages/Acceuil";
import Login from "./pages/Login";
import DashboardAcceuil from "./pages/DashboardAcceuil";
import Tunel from "./pages/Tunel";
import Facturation from "./pages/Facturation";
import Parametres from "./pages/Parametres";
import Token from "./pages/Token";
import Signup from "./pages/Signup"
import Commander from "./pages/Commander";
import PublierOffre from "./pages/PublierOffre";
import Signin from "./pages/SIgnin";
import Clients from "./pages/Clients";
import Chauffeurs from "./pages/Chauffeurs";


function App() {
    return (
        <div className="h-[100vh] document-container">
            <BrowserRouter>
                <Routes>
                    <Route path="/Signup" about element={<Signup />} />
                    <Route path="/Signin" about element={<Signin />} />
                    <Route path="/Commander" about element={<Commander />} />
                    <Route path="/PublierOffre" about element={<PublierOffre />} />
                    <Route path="/Clients" about element={<Clients />} />
                    <Route path="/Chauffeurs" about element={<Chauffeurs />} />
                    {/* <Route path="/Dashboard" about element={<Dashboard/>} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
