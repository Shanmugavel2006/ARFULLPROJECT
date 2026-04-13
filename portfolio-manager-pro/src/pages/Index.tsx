import { useState, useEffect } from "react";
import { Plus, FolderKanban, Eye, LogOut } from "lucide-react";
import ProjectForm from "@/components/ProjectForm";
import AdminProjectCard from "@/components/AdminProjectCard";
import { toast } from "sonner";
import { logout, isAuthenticated } from "@/lib/auth";
import { useNavigate } from "react-router-dom";




const Index = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [formOpen, setFormOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<any | null>(null);
 const navigate = useNavigate(); // ✅ FIXED POSITION

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/admin/login");
    }
}, [navigate]);
  // Load projects from API
  const loadProjects = async () => {
    try {
      const res = await fetch("http://localhost:5000/projects");
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.error(err);
    }
  };
// const navigate = useNavigate();

const handleSignOut = () => {
  logout();
  toast("Signed out");
  navigate("/admin/login"); // or your login route
};
  useEffect(() => {
    loadProjects();
  }, []);

  // Add project
  const handleAdd = async (data: any) => {
    try {
      const res = await fetch("http://localhost:5000/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify({
        //   title: data.title,
        //   description: data.description,
        //   imageUrl: data.imageUrl,
        //   technologies: data.technologies,
        //   liveUrl: data.liveUrl,
        // }),
//         body: JSON.stringify({
//   title: data.title,
//   description: data.description,
//   image: data.imageUrl,                         // ✅ FIX
//   tech: data.technologies?.join(", "),          // ✅ FIX
// }),
body: JSON.stringify({
  title: data.title,
  description: data.description,
  image: data.image,   // ✅ CORRECT
  tech: data.tech,     // ✅ CORRECT
  liveUrl: data.liveUrl,
  githubUrl: data.githubUrl,
}),
      });
      if (!res.ok) throw new Error("Failed");
      toast.success("Project added ✅");
      setFormOpen(false);
      loadProjects();
    } catch (err) {
      console.error(err);
      toast.error("Error saving ❌");
    }
  };


  // Edit project
  const handleEdit = (project: any) => {
    setEditingProject(project);
    setFormOpen(true);
  };

  // Helper to get the correct id for delete
  const getProjectId = (project: any) => project._id || project.id;

  // Update project

  const handleUpdate = async (data: any) => {
    if (!editingProject) return;
    try {
      const res = await fetch(`http://localhost:5000/projects/${editingProject._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(data),
        body: JSON.stringify({
  title: data.title,
  description: data.description,
  // image: data.imageUrl,
  // tech: data.technologies?.join(", "),
  image: data.image,
tech: data.tech,
})
      });
      if (!res.ok) throw new Error("Failed");
      toast.success("Project updated ✅");
      setFormOpen(false);
      setEditingProject(null);
      loadProjects();
    } catch (err) {
      console.error(err);
      toast.error("Error updating ❌");
    }
  };


  // Delete project
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:5000/projects/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed");
      toast.success("Project deleted ✅");
      loadProjects();
    } catch (err) {
      console.error(err);
      toast.error("Error deleting ❌");
    }
  };

  // Close form
  const handleCloseForm = () => {
    setFormOpen(false);
    setEditingProject(null);
  };

  // Stats
  const totalProjects = projects.length;
  const totalTechnologies = [
    ...new Set(projects.flatMap((p) => p.technologies || [])),
  ].length;
  const totalLive = projects.filter((p) => p.liveUrl).length;

  return (
    <div className="min-h-screen bg-[#fcfbfa]">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-[#fcfbfa]/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md">
              <FolderKanban className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold text-foreground leading-tight tracking-tight">Admin Panel</h1>
              <p className="text-xs text-muted-foreground">Manage your portfolio projects</p>
            </div>
          </div>
          <div className="flex items-center gap-2">

            <a
              href={import.meta.env.VITE_PUBLIC_SITE || "http://localhost:3000"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-1.5 border border-border rounded px-3 py-1.5 text-sm font-medium text-foreground bg-white hover:bg-gray-50">
                <Eye className="w-4 h-4" /> View Portfolio
              </button>
            </a>
            <button
  onClick={handleSignOut}
  className="flex items-center gap-1.5 border border-border rounded px-3 py-1.5 text-sm font-medium text-foreground bg-white hover:bg-gray-50"
>
  <LogOut className="w-4 h-4" /> Sign out
</button>
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-card border border-border shadow-card">
            <span className="text-3xl font-bold font-display text-foreground">{totalProjects}</span>
            <span className="text-xs text-muted-foreground mt-1">Total Projects</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-card border border-border shadow-card">
            <span className="text-3xl font-bold font-display text-foreground">{totalTechnologies}</span>
            <span className="text-xs text-muted-foreground mt-1">Technologies</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-card border border-border shadow-card">
            <span className="text-3xl font-bold font-display text-foreground">{totalLive}</span>
            <span className="text-xs text-muted-foreground mt-1">With Live URL</span>
          </div>
        </div>

        {/* Projects Box */}
        <div className="bg-white border border-border rounded-2xl shadow-card p-6 mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-xl font-semibold text-foreground">Projects</h2>
            <button
              onClick={() => { setEditingProject(null); setFormOpen(true); }}
              className="flex items-center gap-1.5 bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary/90 transition"
            >
              <Plus className="w-5 h-5" /> Add Project
            </button>
          </div>
          <div>
            {projects.length === 0 ? (
              <div className="text-center text-gray-400 py-20 text-lg">No projects yet. Click Add Project to get started.</div>
            ) : (
              projects.map((project) => (
                <AdminProjectCard
                  // key={project._id || project.id}
                  key={project._id}
                  project={project}
                  onEdit={handleEdit}
                  // onDelete={(id) => handleDelete(project._id || project.id)}
                  onDelete={(id) => handleDelete(id)}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <ProjectForm
        open={formOpen}
        onClose={handleCloseForm}
        onSubmit={editingProject ? handleUpdate : handleAdd}
        initialData={editingProject}
      />
    </div>
  );
};

export default Index;
