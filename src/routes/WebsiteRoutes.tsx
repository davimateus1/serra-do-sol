import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InstitutionalComponent } from "../components";
import { Home } from "../pages";

export const WebsiteRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/institucional" element={<InstitutionalComponent />} />
      </Routes>
    </BrowserRouter>
  );
};
