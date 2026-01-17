import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, ShieldCheck, Ban, Lock } from "lucide-react";

const approaches = [
  {
    icon: Search,
    title: "Research and education-focused content",
    description: "Every piece of content is backed by research and public data sources.",
  },
  {
    icon: ShieldCheck,
    title: "Risk-first mindset",
    description: "Understanding risk is the foundation of smart investing.",
  },
  {
    icon: Ban,
    title: "No tips, no hype, no guaranteed returns",
    description: "We don't promise unrealistic outcomes or short-term gains.",
  },
  {
    icon: Lock,
    title: "Emphasis on discipline and capital protection",
    description: "Preserving capital is as important as growing it.",
  },
];

const Approach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="approach" className="py-24 bg-background" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 text-sm font-medium text-gold bg-gold/10 rounded-full mb-4">
                Our Philosophy
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Approach to{" "}
                <span className="text-navy">Market Education</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe in building a strong foundation of knowledge before making any investment decisions. 
                Our methodology emphasizes understanding over speculation, discipline over impulse.
              </p>
            </motion.div>

            {/* Right - Points Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {approaches.map((approach, index) => (
                <motion.div
                  key={approach.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-5 bg-card rounded-xl border border-border hover:border-gold/30 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center mb-4">
                    <approach.icon className="w-5 h-5 text-navy" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm">
                    {approach.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {approach.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
