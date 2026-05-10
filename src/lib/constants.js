export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    ME: '/auth/me',
  },
  USERS: {
    LIST: '/users',
    DETAIL: (id) => `/users/${id}`,
    CREATE: '/users',
    UPDATE: (id) => `/users/${id}`,
    DELETE: (id) => `/users/${id}`,
  },
  PRODUCTS: {
    LIST: '/products',
    DETAIL: (id) => `/products/${id}`,
    CREATE: '/products',
    UPDATE: (id) => `/products/${id}`,
    DELETE: (id) => `/products/${id}`,
  },
  ANALYTICS: {
    OVERVIEW: '/analytics/overview',
    SALES: '/analytics/sales',
    USERS: '/analytics/users',
  },
}

export const ROUTES = {
  WEBSITE: {
    HOME: '/',
    ABOUT: '/about',
    CONTACT: '/contact',
    SERVICES: '/services',
    PRODUCTS: '/products',
    BLOG: '/blog',
  },
  DASHBOARD: {
    HOME: '/dashboard',
    ANALYTICS: '/analytics',
    USERS: '/users',
    PRODUCTS: '/products',
    SETTINGS: '/settings',
  },
}

export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  MANAGER: 'manager',
}

export const ORDER_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
}

export const THEME_COLORS = {
  primary: 'blue',
  secondary: 'slate',
  success: 'emerald',
  warning: 'amber',
  danger: 'rose',
  info: 'cyan',
}