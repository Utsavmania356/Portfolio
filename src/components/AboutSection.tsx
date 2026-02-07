import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profileImage from "@/assets/profile.png";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-primary/20 to-transparent rounded-full blur-3xl -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-t from-cyan-accent/10 to-transparent rounded-full blur-3xl" />
      
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary">About Me</span>
            </motion.div>
            
            <h2 className="section-title text-center mb-4">
              Know More About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate developer and tech enthusiast crafting elegant solutions
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            {/* Card glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-cyan-accent/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative glass-card p-4 sm:p-6 md:p-8 lg:p-12 border border-white/10 backdrop-blur-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 items-center">
                {/* Enhanced Avatar with Profile Image */}
                <motion.div 
                  className="flex justify-center md:justify-start"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="relative">
                    {/* Glow effect matching image's blue glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-cyan-accent/30 to-purple-500/20 rounded-3xl blur-3xl" />
                    <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-3xl overflow-hidden border-2 border-cyan-400/50 group-hover:border-cyan-400/80 transition-all duration-500 shadow-2xl shadow-cyan-500/20 bg-transparent">
                      <img 
                        src={profileImage} 
                        alt="Utsav Mishra" 
                        className="w-full h-full object-cover"
                      />
                      {/* Enhanced overlay to complement blue glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </motion.div>

                {/* Enhanced Bio */}
                <div className="md:col-span-2 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold text-foreground">Hi, I'm Utsav!</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-cyan-accent rounded-full" />
                  </div>
                  
                  <div className="space-y-4 text-foreground/90">
                    <p className="leading-relaxed text-base">
                      I'm an Information Science Engineering student with a strong passion for 
                      <span className="text-primary font-semibold"> Web Development</span> and 
                      <span className="text-primary font-semibold"> Data Science</span>. Driven by curiosity about 
                      how real-world systems work, I love learning, adapting, and continuously 
                      improving my technical expertise.
                    </p>
                    <p className="leading-relaxed text-base">
                      I'm fascinated by building applications that solve real problems, 
                      leveraging data to derive meaningful insights, and exploring innovative 
                      solutions at the intersection of AI and technology.
                    </p>
                  </div>
                  
                  {/* Enhanced Stats */}
                  <motion.div
                    className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 }}
                  >
                    {[
                      { number: "7+", label: "Projects" },
                      { number: "5+", label: "Technologies" },
                      { number: "2026", label: "Graduating" }
                    ].map((stat, idx) => (
                      <motion.div 
                        key={idx}
                        className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                        whileHover={{ y: -4 }}
                      >
                        <div className="text-3xl font-bold text-gradient">{stat.number}</div>
                        <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
