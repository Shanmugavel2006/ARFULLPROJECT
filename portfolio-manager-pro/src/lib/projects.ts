import { Project } from "./types";

const STORAGE_KEY = "portfolio_projects";

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with cart management, payment integration, and order tracking.",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    technologies: ["React", "TypeScript", "Node.js", "Stripe"],
    liveUrl: "https://example.com",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task manager with real-time updates, drag-and-drop boards, and team workspaces.",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and historical data.",
    imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&q=80",
    technologies: ["TypeScript", "Chart.js", "OpenWeather API"],
    createdAt: new Date().toISOString(),
  },
];

export function getProjects(): Project[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProjects));
    return defaultProjects;
  }
  return JSON.parse(stored);
}

export function saveProjects(projects: Project[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

export function addProject(project: Omit<Project, "id" | "createdAt">): Project {
  const projects = getProjects();
  const localProject: Project = {
    ...project,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  // Optimistically save locally
  projects.unshift(localProject);
  saveProjects(projects);

  // Try to sync with backend
  (async () => {
    try {
      const res = await fetch((process.env.REACT_APP_BACKEND_URL || "http://localhost:5000") + "/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: project.title,
          description: project.description,
          image: project.imageUrl,
          tech: (project.technologies || []).join(", "),
        }),
      });

      if (!res.ok) {
        console.warn("Failed to sync project to backend", await res.text());
        return;
      }

      const saved = await res.json();
      // Update local storage id to backend id if provided
      const stored = getProjects();
      const idx = stored.findIndex((p) => p.id === localProject.id);
      if (idx !== -1) {
        stored[idx] = {
          ...stored[idx],
          id: saved._id || saved.id || stored[idx].id,
          createdAt: saved.createdAt || stored[idx].createdAt,
        };
        saveProjects(stored);
      }
    } catch (err) {
      console.warn("Could not reach backend to save project:", err);
    }
  })();

  return localProject;
}

export function updateProject(id: string, data: Partial<Omit<Project, "id" | "createdAt">>): Project | null {
  const projects = getProjects();
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) return null;
  projects[index] = { ...projects[index], ...data };
  saveProjects(projects);

  // Try to sync update to backend
  (async () => {
    try {
      const backendId = id; // assume id matches backend _id when synced
      await fetch((process.env.REACT_APP_BACKEND_URL || "http://localhost:5000") + `/projects/${backendId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: projects[index].title,
          description: projects[index].description,
          image: projects[index].imageUrl,
          tech: (projects[index].technologies || []).join(", "),
        }),
      });
    } catch (err) {
      console.warn("Could not reach backend to update project:", err);
    }
  })();

  return projects[index];
}

export function deleteProject(id: string): void {
  const projects = getProjects().filter((p) => p.id !== id);
  saveProjects(projects);

  // Try to delete from backend
  (async () => {
    try {
      const backendId = id;
      await fetch((process.env.REACT_APP_BACKEND_URL || "http://localhost:5000") + `/projects/${backendId}`, {
        method: "DELETE",
      });
    } catch (err) {
      console.warn("Could not reach backend to delete project:", err);
    }
  })();
}
