import { Project } from "@/lib/types";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const PortfolioProjectCard = ({ project }: { project: Project }) => {
  // Support both 'imageUrl' and 'image' for compatibility with backend
  const imageSrc = project.imageUrl || (project as any).image;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300"
    >
      <div className="relative overflow-hidden aspect-video">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-card/90 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-card/90 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-lg text-foreground">{project.title}</h3>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.technologies && project.technologies.map((tech) => (
            <span key={tech} className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioProjectCard;
