import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code, Database, Sparkles, ArrowRight } from "lucide-react";

const opportunities = [
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack web applications with modern frameworks",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Data-driven solutions and insights",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Sparkles,
    title: "AI Projects",
    description: "AI-powered applications and tools",
    color: "from-yellow-500/20 to-orange-500/20"
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden" ref={ref}>
      {/* Animated background accents */}
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-l from-primary/15 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-t from-cyan-accent/10 to-transparent rounded-full blur-3xl" />

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
              <span className="text-xs font-medium text-primary">Opportunities</span>
            </motion.div>
            
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div 
                className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <Briefcase className="w-6 h-6 text-primary" />
              </motion.div>
              <h2 className="section-title text-center">
                What I'm <span className="text-gradient">Looking For</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              I'm eager for opportunities to grow and create impact in these domains
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {opportunities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  {/* Card glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${item.color} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative glass-card p-8 text-center border border-white/10 backdrop-blur-xl h-full flex flex-col">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-cyan-accent/30 flex items-center justify-center mx-auto mb-6 group-hover:from-primary/50 group-hover:to-cyan-accent/50 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <Icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    
                    <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground flex-grow">
                      {item.description}
                    </p>
                    
                    <motion.div 
                      className="mt-4 pt-4 border-t border-white/10 inline-flex gap-1 mx-auto text-primary/60 group-hover:text-primary transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      <span className="text-xs font-medium">Learn more</span>
                      <ArrowRight className="w-3 h-3" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative group"
          >
            {/* Background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-cyan-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative glass-card p-8 border border-white/10 backdrop-blur-xl text-center max-w-2xl mx-auto">
              <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                I'm eager to learn, contribute, and grow with a team that values 
                <span className="text-primary font-semibold"> innovation</span> and 
                <span className="text-primary font-semibold"> continuous improvement</span>. 
                Let's build something amazing together!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
