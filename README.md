**Hola, pasos para ser ejecutado el programa:**

1. Primero debe ejecutar el sql que se encuentra en backend/sql/init.sql, lo hace en su workbechMySQL
2. Ejecutar el comando /scripts/user.tsx
3. cd auth-prueba
4. npm install (Espera a descargar los recursos)
5. cd backend (Acceda a la carpeta del backend para descar todo lo necesario para el backen)
6. npm install
7. Cambiar los datos EN LOS .ENV (FUERON DEJADOS PARA QUE SE TENGA UNA IDEA DE COMO SON LOS DATOS)
8. Abre dos terminales y en cada una acceda a cd auth-prueba y en la otra cd backend
9. En las dos ejecute npm run dev
10. PARA REGISTRAR UN ADMIN ACCEDA A LA RUTA /admin/register-admin

*****************************

En la autenticacion lo que se realizo fue una llamada de una api en donde se comparan las contraseñas y se da valido el inicio de sesion y dependiendo de que rol tenga el usuario (Validacion en LoginInputs.component.tsx) se redirecciona a su pagina de inicio

Entonces dependiendo si el usuario es rol "user" o "admin" se le permitira acceder a las paginas protegidas


Para agregar una pagina protegido, solo se debe ir directamente a la vista
importar lo siguiente import PrivateRoute from "@/backend/src/context/PrivateRouter";  (OJO CAMBIAR LA RUTA DONDE SE ENCUENTRE EL ARCHIVO PrivateRouter)
Y colocar las siguientes etiquetas en el contenido

<PrivateRoute rol="nombre_rol"> 
</PrivateRoute>

Si es para l rol admin:
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

Si es para el rol user
<PrivateRoute rol="user"> 
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


Y para agregar nuevos roles debes realizarlo en el ENUM del sql y editar los enpoints