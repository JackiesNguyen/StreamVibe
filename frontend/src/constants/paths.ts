const PATH = {
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password'
  },
  USER: {
    HOME: '/',
    MOVIES_OPEN_PAGE: '/movies-open-page',
    MOVIES_SHOWS_PAGE: '/movies-shows-page',
    SHOWS_OPEN_PAGE: '/shows-open-page',
    SUBSCRIPTIONS_PAGE: '/subscriptions-page',
    SUPPORT_PAGE: '/support-page'
  },
  ADMIN: {
    DASHBOARD: '/admin/dashboard'
  },
  NOTFOUND: '*'
} as const

export default PATH
