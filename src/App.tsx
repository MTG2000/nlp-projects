import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LexAnalyzerPage from "./pages/LexAnalyzerPage";
import AudioRecord from "./AudioManipulation/AudioRecord";

function App() {
  return (
    <div dir="rtl">
      <Navbar />
      <div className="page-container py-48">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="lex-analyzer" element={<LexAnalyzerPage />} />
          <Route path="AM" element={<AudioRecord />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
