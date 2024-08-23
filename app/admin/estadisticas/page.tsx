"use client";
import { motion } from "framer-motion";
import PrivateRoute from "@/backend/src/context/PrivateRouter";
import NavbarAdminComponent from "@/app/components/Navbar/navbarAdmin.component";

const stats = [
  {
    label: "Usuarios Activos",
    value: "1,234",
    icon: "👤",
    bgColor: "bg-blue-500",
    textColor: "text-white",
  },
  {
    label: "Ventas del Mes",
    value: "$12,345",
    icon: "💰",
    bgColor: "bg-green-500",
    textColor: "text-white",
  },
  {
    label: "Nuevos Registros",
    value: "567",
    icon: "📝",
    bgColor: "bg-purple-500",
    textColor: "text-white",
  },
];

const StatCard = ({ label, value, icon, bgColor, textColor }) => (
  <motion.div
    className={`p-6 rounded-lg shadow-md flex items-center space-x-4 ${bgColor} ${textColor}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-4xl">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold">{label}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </motion.div>
);

const StatsView = () => (
  <PrivateRoute rol="admin">
    <div>
      <NavbarAdminComponent />
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Estadísticas</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  </PrivateRoute>
);

export default StatsView;
