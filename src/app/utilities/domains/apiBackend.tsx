const ApiBackend = {
  URL: "http://localhost:3123",

  // Users
  PUBLIC_USER_CREATE: "/api/public/users/create",
  PUBLIC_USER_LOGIN: "/api/public/users/logIn",

  // Profiles
  PRIVATE_CREATE_PROFILE: "api/private/profiles/create",

  PROFILES_CREATE: "/api/private/profiles/create",
  PROFILES_ALL: "/api/private/profiles/all",
  PROFILES_DELETE: "/api/private/profiles/delete",
  PROFILES_GETONE: "/api/private/profiles/one",
  PROFILES_UPDATE: "/api/private/profiles/update",

  USUARIOS_CREAR: "/api/private/users/crear",
  USUARIOS_OBTENER: "/api/private/users/todos",
  USUARIOS_OBTENER_UNO: "/api/private/users/uno",
  USUARIOS_ELIMINAR: "/api/private/users/eliminar",
  USUARIOS_ACTUALIZAR: "/api/private/users/actualizar",

};

export default ApiBackend;
