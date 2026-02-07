import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, MapPin, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "utsavmishra250504@gmail.com",
    href: "mailto:utsavmishra250504@gmail.com",
    color: "from-red-500/20 to-pink-500/20"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Utsavmania356",
    href: "https://github.com/Utsavmania356",
    color: "from-gray-600/20 to-gray-400/20"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/utsav-mishra-498a39340",
    href: "https://linkedin.com/in/utsav-mishra-498a39340",
    color: "from-blue-500/20 to-cyan-500/20"
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-20 lg:py-32 overflow-hidden" ref={ref}>
      {/* Animated background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-cyan-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-t from-cyan-accent/5 to-transparent rounded-full blur-3xl" />

      <div className="section-container relative z-10">
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
              <span className="text-xs font-medium text-primary">Let's Connect</span>
            </motion.div>
            
            <h2 className="section-title text-center mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              I'd love to hear from you! Whether it's about opportunities, projects, or just a friendly chat.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Contact cards */}
            <div className="grid gap-4 mb-10">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative"
                  >
                    {/* Card glow effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${link.color} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative glass-card p-4 sm:p-5 md:p-6 flex items-center gap-3 sm:gap-5 border border-white/10 backdrop-blur-xl hover:border-primary/40 transition-all duration-300">
                      <motion.div 
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-primary/30 to-cyan-accent/30 flex items-center justify-center flex-shrink-0 group-hover:from-primary/50 group-hover:to-cyan-accent/50 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </motion.div>
                      
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{link.label}</p>
                        <p className="text-sm sm:text-base font-semibold text-foreground truncate group-hover:text-primary transition-colors mt-1">
                          {link.value}
                        </p>
                      </div>
                      
                      <motion.div 
                        className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group relative mb-10"
            >
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative glass-card p-4 sm:p-5 md:p-6 border border-white/10 backdrop-blur-xl text-center">
                <div className="flex items-center justify-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                  >
                    <MapPin className="w-5 h-5 text-green-500" />
                  </motion.div>
                  <span className="font-medium">Bengaluru, India</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Button 
                  size="lg" 
                  className="gap-2 shadow-lg relative overflow-hidden group/btn text-base"
                  asChild
                >
                  <a href="mailto:utsavmishra250504@gmail.com">
                    <Mail className="w-5 h-5" />
                    Send me an email
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </a>
                </Button>
              </motion.div>
              <p className="text-sm text-muted-foreground mt-4">or reach out through any platform above</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
