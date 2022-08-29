import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import DashBoard from "./pages/DashBoard";
import ImageMain from "./pages/Image";
import Home from "./pages/User";
import Header from "./components/historyComponent/Header";
import ImageContainer from "./components/historyComponent/imageContainer";
import UserContainer from "./components/historyComponent/UserContainer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/home" element={<DashBoard />} />
        <Route path="/about" element={<DashBoard />} />
        <Route path="/users" element={<Home />} />
        <Route path="/image" element={<ImageMain />} />
        <Route path="/history" element={<Header />} />
        <Route path="/history/images" element={<ImageContainer />} />
        <Route path="/history/users" element={<UserContainer />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
