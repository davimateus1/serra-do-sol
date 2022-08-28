import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InstitutionalComponent } from "../components";
import { Home, Projects } from "../pages";

export const WebsiteRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/institucional" element={<InstitutionalComponent />} />
        <Route path="/projetos" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};
