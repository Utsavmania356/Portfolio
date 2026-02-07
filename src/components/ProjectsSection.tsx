import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, ChefHat, BarChart2, Bot, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Food Recipe Web Application",
    description: "Full-stack application to search, filter, and save recipes with user authentication.",
    icon: ChefHat,
    techStack: ["ReactJS", "Node.js", "Express", "MongoDB", "JWT"],
    highlights: [
      "ReactJS frontend with JWT authentication",
      "Node.js & Express backend with MongoDB",
      "RESTful APIs with clean, modular architecture",
    ],
    github: "https://github.com/Utsavmania356",
    color: "from-orange-500/20 via-red-500/20 to-pink-500/20",
  },
  {
    title: "Population vs Economy – Data Insights",
    description: "Data analysis project exploring population trends vs economic indicators with visualizations.",
    icon: BarChart2,
    techStack: ["Python", "Pandas", "Matplotlib"],
    highlights: [
      "Data preprocessing with Python & Pandas",
      "Matplotlib visualizations for GDP, inflation, employment",
      "Insight-driven interpretation of socio-economic patterns",
    ],
    github: "https://github.com/Utsavmania356",
    color: "from-blue-500/20 via-cyan-500/20 to-green-500/20",
  },
  {
    title: "AI Tool using React",
    description: "AI-powered web application with intelligent responses and optimized performance.",
    icon: Bot,
    techStack: ["React", "AI APIs", "TypeScript"],
    highlights: [
      "Integrated AI APIs for intelligent responses",
      "Responsive, user-friendly UI",
      "Optimized state management and performance",
    ],
    github: "https://github.com/Utsavmania356",
    color: "from-purple-500/20 via-pink-500/20 to-red-500/20",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-20 lg:py-32 overflow-hidden" ref={ref}>
      {/* Animated background accents */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-primary/15 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-cyan-accent/10 to-transparent rounded-full blur-3xl animate-pulse" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary">Featured Work</span>
            </motion.div>
            
            <h2 className="section-title text-center mb-4">
              Showcase of <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              Innovative solutions and creative applications I've built
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative"
                >
                  {/* Card glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${project.color} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative glass-card overflow-hidden border border-white/10 backdrop-blur-xl h-full flex flex-col">
                    {/* Project header with enhanced gradient */}
                    <div className={`relative h-40 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_30%,hsl(var(--background))_100%)]" />
                      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--foreground))_25%,hsl(var(--foreground))_50%,transparent_50%,transparent_75%,hsl(var(--foreground))_75%,hsl(var(--foreground))_100%)] bg-[length:20px_20px] animate-pulse" />
                      
                      <motion.div 
                        className="relative z-10 p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-white/20 group-hover:bg-background/70 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Icon className="w-8 h-8 text-primary" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-4 flex-grow">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1 text-xs rounded-lg bg-primary/20 border border-primary/40 text-primary/90 font-medium hover:bg-primary/30 transition-all duration-200"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-6 pb-4 border-b border-white/10">
                        {project.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Actions */}
                      <div className="flex gap-3 mt-auto">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 gap-2 border-primary/50 hover:bg-primary/10 hover:border-primary/80"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                            Code
                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
