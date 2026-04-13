import { useState, useEffect, useRef } from "react";
import { Project } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ProjectFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<Project, "id" | "createdAt">) => void;
  initialData?: Project | null;
}

const ProjectForm = ({ open, onClose, onSubmit, initialData }: ProjectFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
    // Upload image to backend, which uploads to Cloudinary
    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  setUploading(true);

  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await fetch("http://localhost:5000/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    // ✅ FIXED ERROR HANDLING
    if (!res.ok) {
      console.log("UPLOAD ERROR:", data);
      alert(data.error || "Upload failed");
      return;
    }

    // ✅ SUCCESS
    setImageUrl(data.url);

  } catch (err) {
    console.log("NETWORK ERROR:", err);
    alert("Image upload error");
  } finally {
    setUploading(false);
  }
};
  const [techInput, setTechInput] = useState("");
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [liveUrl, setLiveUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setDescription(initialData.description || "");
      setImageUrl(initialData.imageUrl || initialData.image || "");
      setTechnologies(initialData.technologies || (typeof initialData.tech === "string" ? initialData.tech.split(",").map(t => t.trim()).filter(Boolean) : []) || []);
      setLiveUrl(initialData.liveUrl || "");
      setGithubUrl(initialData.githubUrl || "");
    } else {
      resetForm();
    }
  }, [initialData, open]);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setImageUrl("");
    setTechInput("");
    setTechnologies([]);
    setLiveUrl("");
    setGithubUrl("");
  };

  const handleAddTech = () => {
    const trimmed = techInput.trim();
    if (trimmed && !technologies.includes(trimmed)) {
      setTechnologies([...technologies, trimmed]);
      setTechInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTech();
    }
  };

  const removeTech = (tech: string) => {
    setTechnologies(technologies.filter((t) => t !== tech));
  };

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  onSubmit({
    title,
    description,
    image: imageUrl, // ✅ FIX
    tech: technologies.join(", "), // ✅ FIX
    liveUrl,
    githubUrl,
  });

  resetForm();
  onClose();
};

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">
            {initialData ? "Edit Project" : "Add New Project"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Project title" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe your project..." rows={3} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="imageUrl">Image *</Label>
            <div className="flex gap-2 items-center">
              <Input
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://..."
                required={!imageUrl}
                className="flex-1"
              />
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleImageChange}
              />
              <Button
                type="button"
                variant="secondary"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
              >
                {uploading ? "Uploading..." : "Upload"}
              </Button>
            </div>
            {imageUrl && (
              <img src={imageUrl} alt="Preview" className="w-full h-32 object-cover rounded-md border border-border mt-1" onError={(e) => (e.currentTarget.style.display = "none")} />
            )}
          </div>
          <div className="space-y-2">
            <Label>Technologies</Label>
            <div className="flex gap-2">
              <Input value={techInput} onChange={(e) => setTechInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="e.g. React" />
              <Button type="button" variant="secondary" onClick={handleAddTech} className="shrink-0">Add</Button>
            </div>
            {technologies.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {technologies.map((tech) => (
                  <span key={tech} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {tech}
                    <button type="button" onClick={() => removeTech(tech)} className="hover:text-destructive">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="liveUrl">Live URL</Label>
              <Input id="liveUrl" value={liveUrl} onChange={(e) => setLiveUrl(e.target.value)} placeholder="https://..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="githubUrl">GitHub URL</Label>
              <Input id="githubUrl" value={githubUrl} onChange={(e) => setGithubUrl(e.target.value)} placeholder="https://..." />
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">Cancel</Button>
            <Button type="submit" className="flex-1">{initialData ? "Update" : "Add Project"}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectForm;
