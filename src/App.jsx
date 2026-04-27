import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BlogsPage from "./pages/BlogsPage";
import BlogDetailPage from "./pages/BlogDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
