import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Institutional, Projects, Financial, Error404 } from "../pages";

export const WebsiteRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/institucional" element={<Institutional />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/financeiro" element={<Financial />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};
