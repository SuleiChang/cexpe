import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mx-auto mt-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
