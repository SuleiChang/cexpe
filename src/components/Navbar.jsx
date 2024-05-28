function Navbar() {
  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Home", path: "/" },
    { title: "Servicios", path: "/servicios" },
    { title: "Clientes", path: "/clientes" },
    { title: "Projectos", path: "/proyectos" },
    { title: "Blog", path: "/blog" },
    { title: "Contacto", path: "/contacto" },
  ];

  return (
    <nav className="bg-gray-200 text-lg w-full md:static border-b-2 py-6">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0">
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-700 hover:text-indigo-600">
                  <a href={item.path} className="block">
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
