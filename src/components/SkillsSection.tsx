import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Globe, 
  Database, 
  BarChart3, 
  Terminal, 
  Lightbulb,
  Sparkles,
  ArrowRight
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "Java", "C++", "C", "JavaScript"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["ReactJS", "Node.js", "HTML5", "CSS3", "REST APIs"],
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "SQL"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Analytics & Tools",
    icon: BarChart3,
    skills: ["Pandas", "Matplotlib", "Git", "GitHub", "Postman", "VS Code"],
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    title: "Networking & Systems",
    icon: Terminal,
    skills: ["OSI Model", "TCP/IP", "Linux", "CLI", "Shell Scripting"],
    color: "from-red-500/20 to-pink-500/20"
  },
  {
    title: "Core Concepts",
    icon: Lightbulb,
    skills: ["OOP", "DBMS", "Agile basics"],
    color: "from-indigo-500/20 to-purple-500/20"
  },
];

const exploringTopics = [
  "AI for Social Good",
  "Media Technology",
  "Broadcast Systems",
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="relative py-20 lg:py-32 overflow-hidden" ref={ref}>
      {/* Animated background accents */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-cyan-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-primary/5 to-cyan-accent/5 rounded-full blur-3xl" />

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
              <span className="text-xs font-medium text-primary">Technical Skills</span>
            </motion.div>
            
            <h2 className="section-title text-center mb-4">
              Expertise & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              A comprehensive toolkit from languages to frameworks and tools I've mastered
            </p>
          </div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-12"
          >
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative"
                >
                  {/* Card background glow */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${category.color} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative glass-card p-4 sm:p-5 md:p-6 border border-white/10 backdrop-blur-xl h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div 
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-cyan-accent/30 flex items-center justify-center group-hover:from-primary/50 group-hover:to-cyan-accent/50 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span 
                          key={skillIndex} 
                          className="px-3 py-1.5 text-xs rounded-lg bg-primary/20 border border-primary/30 text-primary font-medium hover:bg-primary/30 transition-all duration-300 cursor-default"
                          whileHover={{ scale: 1.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Currently Exploring */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto group relative"
          >
            {/* Background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-cyan-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative glass-card p-8 border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">Currently Exploring</h3>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {exploringTopics.map((topic, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="group/badge"
                  >
                    <span className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary/20 to-cyan-accent/20 border border-primary/40 text-sm font-medium text-primary group-hover/badge:border-primary/60 transition-all duration-300 flex items-center gap-2">
                      {topic}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover/badge:opacity-100 transition-opacity" />
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
