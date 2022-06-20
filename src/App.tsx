import { Routes, Route } from "react-router-dom";
import { ResltPage } from "./pages/ResultPage";
import { ErrorPage } from "./pages/ErrorPage";
import { StartPage } from "./pages/StartPage";
import "./App.css";

function App() {
  return (
    <div className="mainFrame">
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/result" element={<ResltPage />} />
      <Route path="/error" element={<ErrorPage />} />
    </Routes>
    </div>
  );
}

export default App;
