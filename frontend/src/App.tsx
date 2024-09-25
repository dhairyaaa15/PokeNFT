import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import './index.css';
import Main from "./pages/Main";
import AdminPage from "./pages/Admin";
import NftCarousel from "./components/NftCarousel"; // Import NftCarousel
import MyProfile from "./pages/Myprofile";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/main" element={<Main />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/nftcarousel" element={<NftCarousel />} /> {/* Add route for NftCarousel */}
          <Route path="/myprofile" element={<MyProfile />} /> {/* Add route for MyProfile */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
