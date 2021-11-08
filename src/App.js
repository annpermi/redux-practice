import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./containers/HomePage";
import UserPage from "./containers/UserPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:userId" element={<UserPage />} />
          <Route path="/*">404 Not Found</Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
