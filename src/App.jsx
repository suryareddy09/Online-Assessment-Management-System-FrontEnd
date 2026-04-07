import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Home from "./Components/Layout/Home";
import About from "./Components/Layout/About";
import Login from "./Components/Layout/Login";
import Signup from "./Components/Layout/Signup";
import Dashboard from "./Components/Layout/Dashboard";
import InstructionPage from "./Components/Layout/InstructionPage";
import ExamPage from "./Components/Layout/ExamPage";
import ResultPage from "./Components/Layout/ResultPage";
import ProtectedRoute from "./Components/Layout/ProtectedRoute";
import LeaderboardPage from "./Components/Layout/LeaderboardPage";
function LayoutWrapper() {
  const location = useLocation();

  const hideNavbar =
    location.pathname.startsWith("/exam") ||
    location.pathname.startsWith("/result") ||
    location.pathname.startsWith("/instructions");

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/leaderboardPage" element={<LeaderboardPage/>} /> 
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/instructions/:id"
          element={
            <ProtectedRoute>
              <InstructionPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/exam/:attemptId"
          element={
            <ProtectedRoute>
              <ExamPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/result"
          element={
            <ProtectedRoute>
              <ResultPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper />
    </BrowserRouter>
  );
}

export default App;