const PATH = {
  ROOT: "/",
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",
  },
  USER: {
    HOME: "/",
    MOVIES_SHOWS: "/movies-shows",
    SUPPORT: "/support",
    SUBSCRIPTIONS: "/subscriptions",
  },
  ADMIN: {
    DASHBOARD: "/admin/dashboard",
  },
  NOTFOUND: "*",
} as const;

export default PATH;
