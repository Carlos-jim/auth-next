// src/App.js
import React from "react";
import PrivateRoute from "@/backend/src/context/PrivateRouter"; 
import NavbarAdminComponent from "@/app/components/Navbar/navbarAdmin.component"


function AdminDashboard() {
  return (
    <PrivateRoute rol="admin">

    <div>
    <NavbarAdminComponent></NavbarAdminComponent>
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white">
        <div className="p-6 text-2xl font-bold">Admin Dashboard</div>
        <nav>
          <ul>
            <li className="px-4 py-2 hover:bg-blue-700">
              <a href="#">Dashboard</a>
            </li>
            <li className="px-4 py-2 hover:bg-blue-700">
              <a href="#">Usuarios</a>
            </li>
            <li className="px-4 py-2 hover:bg-blue-700">
              <a href="#">Configuraciones</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold">Bienvenido al Dashboard</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Estadísticas</h2>
            <p className="mt-2 text-gray-600">Este es el panel de estadísticas.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Usuarios</h2>
            <p className="mt-2 text-gray-600">Este es el panel de usuarios.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Configuraciones</h2>
            <p className="mt-2 text-gray-600">Este es el panel de configuraciones.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </PrivateRoute>
  );
}

export default AdminDashboard;
