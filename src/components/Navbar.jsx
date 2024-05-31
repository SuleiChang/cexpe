import { NavLink } from "react-router-dom";

function Navbar() {
  const navigation = [
    { title: "Home", path: "/" },
    { title: "Servicios", path: "/servicios" },
    { title: "Clientes", path: "/clientes" },
    { title: "Proyectos", path: "/proyectos" },
    { title: "Blog", path: "/blog" },
    { title: "Contacto", path: "/contacto" },
  ];

  return (
    <nav className="bg-gray-200 text-lg w-full md:static border-b-2 py-6">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0">
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-gray-700 font-semibold">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-white bg-indigo-600 px-2 py-1 rounded-md" : "text-gray-700 px-2 py-1 hover:text-indigo-600"
                  }
                  end={item.path === "/"} // Exact match for home path
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
