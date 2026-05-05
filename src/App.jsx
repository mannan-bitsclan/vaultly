import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage, PrivacyPolicy, BlogsPage, BlogDetailPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/blog/:category/:slug" element={<BlogDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
