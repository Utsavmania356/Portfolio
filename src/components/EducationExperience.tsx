import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";

const timelineData = [
  {
    type: "education",
    title: "B.E. in Information Science",
    institution: "Acharya Institute of Technology, Bengaluru",
    period: "2022 – 2026",
    description: "Pursuing a Bachelor's degree in Information Science Engineering with focus on web development and data science.",
    icon: GraduationCap,
  },
  {
    type: "experience",
    title: "Mobile Developer Intern",
    institution: "Mobilean Technologies",
    period: "Feb 2026 – Present",
    description: "Gaining hands-on experience in mobile development, learning real-world application development practices and contributing to live projects.",
    icon: Briefcase,
  },
];

const EducationExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-20 lg:py-32 overflow-hidden" ref={ref}>
      {/* Animated background accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tl from-cyan-accent/15 to-transparent rounded-full blur-3xl" />
      
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
              <span className="text-xs font-medium text-primary">Journey</span>
            </motion.div>
            
            <h2 className="section-title text-center mb-4">
              Education & <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              My academic journey and professional milestones
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />

            {timelineData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-start gap-8 mb-16 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Enhanced Timeline dot */}
                  <motion.div 
                    className="absolute left-8 md:left-1/2 md:-translate-x-1/2 z-10"
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className={`relative w-6 h-6 rounded-full border-4 border-background ${
                      item.type === "education" ? "bg-primary" : "bg-cyan-accent"
                    } shadow-lg`}>
                      <div className={`absolute inset-0 rounded-full ${
                        item.type === "education" ? "bg-primary/30" : "bg-cyan-accent/30"
                      } blur animate-pulse`} />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <motion.div 
                      className="group relative"
                      whileHover={{ y: -4 }}
                    >
                      {/* Card glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-cyan-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative glass-card p-6 border border-white/10 backdrop-blur-xl hover:border-primary/40 transition-all duration-300">
                        <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          <motion.div 
                            className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                              item.type === "education" 
                                ? "bg-gradient-to-br from-primary/30 to-primary/10" 
                                : "bg-gradient-to-br from-cyan-accent/30 to-cyan-accent/10"
                            }`}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Icon className={`w-6 h-6 ${
                              item.type === "education" ? "text-primary" : "text-cyan-accent"
                            }`} />
                          </motion.div>
                          <div className={`flex items-center gap-2 text-sm font-medium ${
                            item.type === "education" ? "text-primary" : "text-cyan-accent"
                          }`}>
                            <Calendar className="w-4 h-4" />
                            {item.period}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <MapPin className="w-4 h-4" />
                          {item.institution}
                        </div>
                        
                        <p className="text-sm text-muted-foreground/80 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
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

export default EducationExperience;
