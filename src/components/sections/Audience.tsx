import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, BarChart3, Clock } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Beginners",
    description: "Learning the Indian markets from scratch with structured education.",
  },
  {
    icon: BookOpen,
    title: "Financial Literacy Seekers",
    description: "Investors seeking comprehensive financial literacy and understanding.",
  },
  {
    icon: BarChart3,
    title: "Risk-Aware Traders",
    description: "Traders who want to understand risk, structure, and discipline.",
  },
  {
    icon: Clock,
    title: "Long-term Investors",
    description: "Investors focused on education and sustainable wealth building.",
  },
];

const Audience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="audience" className="py-24 bg-muted/30" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium text-gold bg-gold/10 rounded-full mb-4">
              Who It's For
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Who Can Benefit
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our educational content is designed for anyone looking to build a solid foundation in financial markets.
            </p>
          </motion.div>

          {/* Audience Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience, index) => (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="p-6 bg-card rounded-2xl border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy to-navy-dark flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                    <audience.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {audience.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
