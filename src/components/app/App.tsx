import { Route, Routes } from "react-router-dom";
import { FormPage } from "../../pages/form";
import { HomePage } from "../../pages/homePage";
import "./App.css";

export function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="" element={<HomePage />}></Route>
                <Route path="/form" element={<FormPage />}></Route>
            </Routes>
        </div>
    );
}
