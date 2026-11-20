import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { authApi, roleStore, tokenStore } from "./api";
import type { AdminUser, Role } from "./types";

interface AuthCtx {
  user: AdminUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  hasRole: (...allowed: Role[]) => boolean;
}

const Ctx = createContext<AuthCtx | null>(null);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  // Token is in-memory only, so on a fresh page load there is no session
  // to restore. Skip the /auth/me round-trip and land on the login form.
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!tokenStore.get()) return;
    let cancelled = false;
    setLoading(true);
    (async () => {
      try {
        const me = await authApi.me();
        if (!cancelled) {
          roleStore.set(me.role);
          setUser(me);
        }
      } catch {
        tokenStore.clear();
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const res = await authApi.login(email, password);
    tokenStore.set(res.token);
    roleStore.set(res.user.role);
    setUser(res.user);
  }, []);

  const logout = useCallback(async () => {
    await authApi.logout();
    setUser(null);
  }, []);

  const hasRole = useCallback(
    (...allowed: Role[]) => !!user && allowed.includes(user.role),
    [user],
  );

  return (
    <Ctx.Provider value={{ user, loading, login, logout, hasRole }}>{children}</Ctx.Provider>
  );
}

export function useAdminAuth() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useAdminAuth must be used within AdminAuthProvider");
  return v;
}
