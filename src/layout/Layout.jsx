import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full mt-10 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
