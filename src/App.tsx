import SearchApp from "./SearchApp";
import Header from "./components/Heading";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotifApp from "./NotifApp";
import Home from "./Home";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <BrowserRouter basename="/UCLA_Schedule_Scraper">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchApp />} />
          <Route path="/notifications" element={<NotifApp />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
