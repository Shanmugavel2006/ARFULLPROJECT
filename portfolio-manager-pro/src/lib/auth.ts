export type AuthResult = { success: boolean };

export async function login(email: string, password: string): Promise<AuthResult> {
  await new Promise((r) => setTimeout(r, 400));
  if (email === "admin@example.com" && password === "password") {
    localStorage.setItem("admin_token", "mock-token");
    return { success: true };
  }
  throw new Error("Invalid credentials");
}

export function logout() {
  localStorage.removeItem("admin_token");
}

export function isAuthenticated() {
  return Boolean(localStorage.getItem("admin_token"));
}
