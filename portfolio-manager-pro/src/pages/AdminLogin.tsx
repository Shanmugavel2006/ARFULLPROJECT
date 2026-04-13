import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login, logout, isAuthenticated } from "@/lib/auth";
import { toast } from "sonner";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [authed, setAuthed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAuthed(isAuthenticated());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      toast.success("Signed in successfully");
      setAuthed(true);
      navigate("/");
    } catch (err) {
      toast.error((err as Error).message || "Sign in failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = () => {
    logout();
    setAuthed(false);
    toast("Signed out");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-6 rounded-lg bg-card border border-border shadow-card">
        <h2 className="text-lg font-semibold mb-2 text-foreground">Admin</h2>
        <p className="text-sm text-muted-foreground mb-4">Sign in to manage your portfolio</p>

        {authed ? (
          <div className="space-y-4">
            <p className="text-sm text-foreground">You are signed in.</p>
            <div className="flex gap-2">
              <Button onClick={() => navigate("/")}>Go to Admin</Button>
              <Button variant="ghost" onClick={handleSignOut}>Sign out</Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Email</label>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="admin@example.com" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Password</label>
              <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
            </div>
            <div className="flex items-center justify-between">
              <Button type="submit" disabled={loading}>{loading ? "Signing in..." : "Sign in"}</Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;
