import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Droplets, PiggyBank, Bitcoin } from "lucide-react";

const services = [
  {
    icon: PiggyBank,
    title: "Investment Awareness",
    description: "General investment education covering diversification, asset allocation, mutual funds, ETFs, and long-term wealth concepts.",
    details: "Content is shared strictly for learning purposes.",
    color: "teal",
  },
  {
    icon: TrendingUp,
    title: "Stock Market Education",
    description: "Educational insights on global equity markets based on publicly available data.",
    details: "We explain market trends, basic technical concepts, and long-term investing principles in a simple and responsible manner.",
    color: "navy",
  },
  {
    icon: Droplets,
    title: "Commodity Market Education",
    description: "Learning-oriented content on commodities such as gold, silver, crude oil, and base metals.",
    details: "Focused on understanding demand-supply factors, global influence, and risk management.",
    color: "gold",
  },
  {
    icon: Bitcoin,
    title: "Cryptocurrency Education",
    description: "Educational content on digital assets, blockchain technology, and crypto market dynamics.",
    details: "Learn about Bitcoin, Ethereum, altcoins, and the fundamentals of decentralized finance.",
    color: "purple",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-muted/30" ref={ref}>
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
              What We Offer
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Educational Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive learning resources to help you understand financial markets with clarity and confidence.
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="h-full p-8 bg-card rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div 
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                      service.color === "navy" ? "bg-navy/10" :
                      service.color === "gold" ? "bg-gold/10" :
                      service.color === "purple" ? "bg-purple-500/10" :
                      "bg-teal/10"
                    }`}
                  >
                    <service.icon 
                      className={`w-7 h-7 ${
                        service.color === "navy" ? "text-navy" :
                        service.color === "gold" ? "text-gold" :
                        service.color === "purple" ? "text-purple-500" :
                        "text-teal"
                      }`}
                    />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {service.details}
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

export default Services;
