import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Creators, Home } from "../pages";

export const WebsiteRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criadores" element={<Creators />} />
      </Routes>
    </BrowserRouter>
  );
};
