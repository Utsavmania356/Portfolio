import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Bot, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AIToolDemo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsTyping(true);
    setResponse("");

    // Simulated AI response
    const aiResponse = `Great question about "${input}"! This is a demo showcasing how AI integration works in my React applications. In a production environment, this would connect to real AI APIs to provide intelligent, contextual responses.`;

    // Typing effect
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < aiResponse.length) {
        setResponse(aiResponse.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, 20);

    setInput("");
  };

  return (
    <section className="relative py-20 lg:py-32 bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <h2 className="section-title text-center">
              AI <span className="text-gradient">Demo</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Experience a preview of my AI-powered React application with intelligent responses
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-6 lg:p-8"
          >
            {/* Chat header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-xs text-muted-foreground">Powered by React + AI APIs</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs text-muted-foreground">Online</span>
              </div>
            </div>

            {/* Response area */}
            <div className="min-h-[150px] mb-6 p-4 rounded-xl bg-background/50 border border-border">
              {response ? (
                <p className="text-sm leading-relaxed">
                  {response}
                  {isTyping && <span className="inline-block w-2 h-4 ml-1 bg-primary/80 animate-pulse" />}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground italic">
                  Ask me anything! Type a question below to see the AI in action...
                </p>
              )}
            </div>

            {/* Input area */}
            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question here..."
                className="flex-1 bg-background/50"
                disabled={isTyping}
              />
              <Button type="submit" disabled={isTyping || !input.trim()} className="gap-2">
                <Send className="w-4 h-4" />
                Send
              </Button>
            </form>

            {/* Note */}
            <p className="text-xs text-muted-foreground mt-4 text-center">
              This is a demo. Real AI API integration available for production use.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIToolDemo;
