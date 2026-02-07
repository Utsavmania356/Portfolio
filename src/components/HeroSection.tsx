import { motion } from "framer-motion";
import { Download, Github, Mail, Linkedin, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile.png";

const HeroSection = () => {
  const handleDownloadResume = () => {
    const resumePath = "/resume.pdf"; // Place your resume.pdf in the public folder
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Utsav-Mishra-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      >
        {/* Enhanced Color Grading Overlays */}
        {/* Subtle warm color grade overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />
        
        {/* Left side darkening for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
        
        {/* Subtle blue-ish overlay to enhance mountains */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent opacity-60" />
        
        {/* Smooth vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 z-[1] opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Floating orbs */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-[100px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-cyan-accent/10 blur-[120px]"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Social Links - Left Side */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-muted-foreground/30 to-muted-foreground/30 mx-auto" />
        <a 
          href="https://github.com/Utsavmania356" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all duration-300 group"
        >
          <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </a>
        <a 
          href="https://linkedin.com/in/utsav-mishra-498a39340" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all duration-300 group"
        >
          <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </a>
        <a 
          href="mailto:utsavmishra250504@gmail.com"
          className="w-10 h-10 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all duration-300 group"
        >
          <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </a>
        <div className="w-px h-16 bg-gradient-to-b from-muted-foreground/30 via-muted-foreground/30 to-transparent mx-auto" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Content - 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-12 bg-primary" />
              <span className="text-sm font-medium text-primary tracking-wider uppercase">
                Available for opportunities
              </span>
            </motion.div>

            <div className="space-y-1">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight leading-[1]"
              >
                <span className="block text-gradient bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">UTSAV</span>
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight leading-[1]"
              >
                <span className="block text-foreground/90">MISHRA</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-lg border-l-2 border-primary/50 pl-4"
            >
              Building scalable web applications, data-driven insights, and AI-powered solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button 
                size="lg" 
                className="gap-2 group relative overflow-hidden cursor-pointer"
                onClick={handleDownloadResume}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 group"
                asChild
              >
                <a href="#projects">
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex gap-4 sm:gap-6 lg:gap-8 pt-4 sm:pt-8 flex-wrap sm:flex-nowrap"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">7+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="w-px bg-border hidden sm:block" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">5+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="w-px bg-border hidden sm:block" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">2026</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Graduating</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Floating Profile Card - 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="lg:col-span-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect behind card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-cyan-accent/20 rounded-3xl blur-2xl opacity-50" />
              
              {/* Profile Card */}
              <div className="relative glass-card p-6 w-full max-w-sm border-primary/20 hover:border-primary/40 transition-colors">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span className="text-xs text-muted-foreground">Available for work</span>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    2026 Grad
                  </span>
                </div>

                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <div className="relative group">
                    {/* Glow effect matching image's blue glow */}
                    <div className="absolute -inset-3 bg-gradient-to-br from-blue-500/30 via-cyan-accent/30 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300" />
                    
                    <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-cyan-400/50 group-hover:border-cyan-400/80 transition-all duration-300 shadow-lg shadow-cyan-500/20">
                      <img 
                        src={profileImage} 
                        alt="Utsav Mishra" 
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 group-hover:opacity-100 opacity-0 transition-opacity" />
                    </div>
                    
                    {/* Decorative ring */}
                    <div className="absolute -inset-1 border border-dashed border-cyan-400/40 rounded-3xl animate-[spin_30s_linear_infinite]" />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-1">Utsav Mishra</h3>
                  <p className="text-sm text-muted-foreground">
                    ISE Student • Web & Data Engineer
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {['React', 'Node.js', 'Python', 'AI'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs rounded-lg bg-secondary/80 border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  className="w-full gap-2 group" 
                  asChild
                >
                  <a href="#contact">
                    <Mail className="w-4 h-4" />
                    Let's Connect
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </a>
      </motion.div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default HeroSection;
