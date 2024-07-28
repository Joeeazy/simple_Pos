import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import POSPage from "./pages/POSPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pos" element={<POSPage />} />
      </Routes>
    </Router>
  );
}

export default App;
