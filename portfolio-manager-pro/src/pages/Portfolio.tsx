import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProjects } from "@/lib/projects";
import PortfolioProjectCard from "@/components/PortfolioProjectCard";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [projects] = useState(getProjects);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground">
              <ArrowLeft className="w-4 h-4" /> Back to Admin
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" /> My Work
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Portfolio Projects
          </h1>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            A collection of projects I've built, exploring different technologies and solving real-world problems.
          </p>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <PortfolioProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        {projects.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="font-display text-lg">No projects to display yet.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Portfolio;
