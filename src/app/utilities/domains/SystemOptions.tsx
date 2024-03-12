const adminOptions = [
  {
    nombre: "Acerca de",
    icono: "bi bi-grid",
    ruta: "/home/about",
    hijos: [],
  },
  {
    nombre: "Perfiles",
    icono: "bi bi-clipboard-data",
    ruta: "",
    hijos: [
      {
        nombre: "Listado",
        icono: "bi bi-circle",
        ruta: "/home/listprofiles",
      },
      { nombre: "Nuevo", icono: "bi bi-circle", ruta: "/home/addprofile" },
      {
        nombre: "Administración",
        icono: "bi bi-circle",
        ruta: "/home/admprofile",
      },
    ],
  }
];

// *********************************************************************************

const guestOptions = [
  {
    nombre: "Acerca de",
    icono: "bi bi-grid",
    ruta: "/home/about",
    hijos: [],
  },
  {
    nombre: "Compras",
    icono: "bi bi-clipboard-data",
    ruta: "",
    hijos: [
      {
        nombre: "Pendientes",
        icono: "bi bi-circle",
        ruta: "/home/admuser",
      },
      {
        nombre: "Productos",
        icono: "bi bi-circle",
        ruta: "/home/admuser",
      },
      { nombre: "Antiguas", icono: "bi bi-circle", ruta: "/home/admuser" },
    ],
  },
];

export { adminOptions, guestOptions };
