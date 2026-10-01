import { AuthResponse, LoginCredentials, RegisterCredentials, User } from '../types';

const TOKEN_KEY = 'bytespace_token';
const USER_KEY = 'bytespace_user';

// Helper to set cookie
function setAuthCookie(token: string, days = 7) {
  if (typeof document === 'undefined') return;
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${TOKEN_KEY}=${encodeURIComponent(token)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

// Helper to remove cookie
function removeAuthCookie() {
  if (typeof document === 'undefined') return;
  document.cookie = `${TOKEN_KEY}=; path=/; max-age=0; SameSite=Lax`;
}

export const authService = {
  /**
   * Register a new user
   * When real backend is ready, replace simulated response with fetch('/api/auth/register', ...)
   */
  async register(credentials: RegisterCredentials): Promise<AuthResponse> {
    // ========================================================
    // TODO: Connect real backend API:
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(credentials),
    // });
    // if (!res.ok) throw new Error((await res.json()).message || 'Registration failed');
    // return res.json();
    // ========================================================

    // Simulating API network call (350ms delay)
    await new Promise(resolve => setTimeout(resolve, 350));

    // Demo user payload generated from submitted credentials
    const demoUser: User = {
      id: 'usr_' + Math.random().toString(36).substring(2, 9),
      name: credentials.name.trim() || 'Demo User',
      email: credentials.email.trim().toLowerCase(),
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(credentials.name.trim() || 'User')}&backgroundColor=003be2,d4fb20`,
      role: 'student',
    };

    const token = 'mock_jwt_token_' + Math.random().toString(36).substring(2) + Date.now();

    // Persist session
    if (typeof window !== 'undefined') {
      localStorage.setItem(USER_KEY, JSON.stringify(demoUser));
      setAuthCookie(token);
    }

    return { user: demoUser, token };
  },

  /**
   * Login user with credentials
   */
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    await new Promise(resolve => setTimeout(resolve, 350));

    const demoUser: User = {
      id: 'usr_' + Math.random().toString(36).substring(2, 9),
      name: credentials.email.split('@')[0] || 'User',
      email: credentials.email.trim().toLowerCase(),
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(credentials.email)}&backgroundColor=003be2,d4fb20`,
      role: 'student',
    };

    const token = 'mock_jwt_token_' + Math.random().toString(36).substring(2) + Date.now();

    if (typeof window !== 'undefined') {
      localStorage.setItem(USER_KEY, JSON.stringify(demoUser));
      setAuthCookie(token);
    }

    return { user: demoUser, token };
  },

  /**
   * Logout user and clear all persisted tokens
   */
  logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(USER_KEY);
      removeAuthCookie();
    }
  },

  /**
   * Retrieve currently saved user from localStorage
   */
  getCurrentUser(): User | null {
    if (typeof window === 'undefined') return null;
    try {
      const stored = localStorage.getItem(USER_KEY);
      return stored ? (JSON.parse(stored) as User) : null;
    } catch {
      return null;
    }
  },
};
