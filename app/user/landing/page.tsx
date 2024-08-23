import React from "react";
import PrivateRoute from "@/backend/src/context/PrivateRouter"; // Asegúrate de ajustar esta ruta correctamente
import NavbarUserComponent from "@/app/components/Navbar/navbar.componen";
function LandingPage() {
  return (
    <PrivateRoute rol="user">
      <div>
        <NavbarUserComponent></NavbarUserComponent>
        <div className="bg-gray-100">
          {/* Hero Section */}
          <section className="bg-white">
            <div className="container mx-auto text-center py-20 px-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
                Welcome to Our Landing Page
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Build your web presence with this simple and elegant landing
                page.
              </p>
              <a
                href="#get-started"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all"
              >
                Get Started
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto my-20 px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-blue-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m-2-6h2m-2-4h2m4 10H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Responsive Design
                </h3>
                <p className="text-gray-600">
                  Our page looks great on all devices.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-blue-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v8m0-4h4m-4 0H8m2-4h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4a2 2 0 012-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
                <p className="text-gray-600">
                  Optimized for speed and performance.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-blue-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
                <p className="text-gray-600">
                  Get started quickly with easy setup.
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-800 py-6 text-white text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
            <div className="mt-4">
              <a href="#facebook" className="text-blue-400 mx-2">
                Facebook
              </a>
              <a href="#twitter" className="text-blue-300 mx-2">
                Twitter
              </a>
              <a href="#instagram" className="text-pink-400 mx-2">
                Instagram
              </a>
            </div>
          </footer>
        </div>
      </div>
    </PrivateRoute>
  );
}

export default LandingPage;
