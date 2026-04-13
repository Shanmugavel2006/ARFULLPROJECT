import { Project } from "@/lib/types";
import { Pencil, Trash2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface AdminProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
}

const AdminProjectCard = ({ project, onEdit, onDelete }: AdminProjectCardProps) => {
  // Support both 'imageUrl', 'image', and fallback for compatibility with backend
  const imageSrc = project.imageUrl || (project as any).image || (project as any).img || '';
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      className="group flex gap-4 p-4 rounded-xl bg-white shadow-card border border-border hover:shadow-elevated transition-shadow"
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={project.title}
          className="w-28 h-20 rounded-lg object-cover shrink-0"
          onError={e => (e.currentTarget.style.display = 'none')}
        />
      ) : null}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display font-semibold text-lg text-foreground truncate">{project.title}</h3>
          <div className="flex gap-1 shrink-0">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            )}
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary" onClick={() => onEdit(project)}>
              <Pencil className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive" onClick={() => onDelete(project._id)}>
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {project.technologies && project.technologies.length > 0 && project.technologies.map((tech) => (
            <span key={tech} className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AdminProjectCard;
