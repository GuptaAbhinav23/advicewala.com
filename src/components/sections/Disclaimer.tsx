import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Info, Shield, UserCheck } from "lucide-react";

const disclaimerPoints = [
  "The information provided on this website is for educational and informational purposes only.",
  "We are not a registered investment advisor in any jurisdiction.",
  "We do not provide personalized investment advice, tips, or guaranteed returns.",
  "Stock market, commodity market, and cryptocurrency investments are subject to market risks. Past performance is not indicative of future results.",
  "Users are advised to consult a registered financial professional before making any investment decisions.",
];

const Disclaimer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="disclaimer" className="py-24 bg-background" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-3xl border-2 border-destructive/20 shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-destructive/5 border-b border-destructive/20 p-6 md:p-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="w-7 h-7 text-destructive" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                    Important Disclaimer
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    Please read this carefully before proceeding
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <ul className="space-y-4">
                {disclaimerPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Info className="w-3.5 h-3.5 text-navy" />
                    </div>
                    <p className="text-foreground leading-relaxed">
                      {point}
                    </p>
                  </motion.li>
                ))}
              </ul>

              {/* Additional Notes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-8 grid sm:grid-cols-2 gap-4"
              >
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                  <Shield className="w-5 h-5 text-navy" />
                  <span className="text-sm text-muted-foreground">
                    Educational Content Only
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                  <UserCheck className="w-5 h-5 text-navy" />
                  <span className="text-sm text-muted-foreground">
                    Consult Registered Professionals
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
