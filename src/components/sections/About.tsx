import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, BookMarked, AlertTriangle } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 text-sm font-medium text-gold bg-gold/10 rounded-full mb-4">
                About Us
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Empowering Financial{" "}
                <span className="text-navy">Literacy</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                We are an educational platform focused on global stock markets, commodity markets, cryptocurrency, and investment awareness.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our goal is to help individuals understand how financial markets work, the risks involved, and the importance of disciplined decision-making.
              </p>
              <div className="flex items-center gap-3 p-4 bg-destructive/5 border border-destructive/20 rounded-xl">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0" />
                <p className="text-sm text-foreground font-medium">
                  We do not offer guaranteed returns or fixed profit schemes.
                </p>
              </div>
            </motion.div>

            {/* Visual Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid gap-6"
            >
              <div className="p-6 bg-card rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-navy" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Our Mission
                </h3>
                <p className="text-muted-foreground">
                  To democratize financial education and help every global investor make informed, disciplined decisions.
                </p>
              </div>
              
              <div className="p-6 bg-card rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <BookMarked className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Our Values
                </h3>
                <p className="text-muted-foreground">
                  Transparency, integrity, and education-first approach in everything we share and teach.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
