import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/notFound/notFound";

import { lazy, Suspense } from "react";
const Contact = lazy(() => import("./pages/contact/contact"));
const About = lazy(() => import("./pages/about/about"));
const Home = lazy(() => import("./pages/home/home"));
export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
