import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import CustomerPage from "../pages/CustomerPage";
import ProjectsPage from "../pages/ProjectsPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import ServiceDetailPage from "../pages/ServiceDetailPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/talleres" element={<ServicesPage />} />
          <Route path="/talleres/:id" element={<ServiceDetailPage />} />
          <Route path="/programas/:param?" element={<CustomerPage />} />
          <Route path="/asesoramiento" element={<ProjectsPage />} />
          <Route path="/blog/:param?" element={<BlogPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
