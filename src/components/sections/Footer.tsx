import { motion } from "framer-motion";
import { AlertTriangle, BookOpen, TrendingUp, PiggyBank, Bitcoin, Youtube, Instagram } from "lucide-react";
import adviceWalaLogo from "@/assets/advicewala-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-primary-foreground">
      {/* Risk Warning Banner */}
      <div className="bg-destructive/90 py-4">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-center gap-3 text-center">
            <AlertTriangle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-medium">
              Trading and investing in financial markets involves risk, including loss of capital. Only invest money that you can afford to lose.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-10">
              {/* Brand */}
              <div className="md:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={adviceWalaLogo} 
                    alt="Advicewala Logo" 
                    className="h-36 w-auto mb-4"
                  />
                  <p className="text-primary-foreground/70 mb-6 max-w-md">
                    Empowering investors and traders globally with quality financial education, 
                    risk awareness, and disciplined investment principles.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary-foreground/50 mb-4">
                    <BookOpen className="w-4 h-4" />
                    <span>Educational Purpose Only</span>
                  </div>
                  {/* Contact */}
                  <div className="flex items-center gap-2 text-primary-foreground/70 mb-4">
                    <span className="text-sm">📧 advicewala24@gmail.com</span>
                  </div>
                  {/* Social Links */}
                  <div className="flex items-center gap-4">
                    <a 
                      href="https://youtube.com/@advicewala" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-foreground/70 hover:text-gold transition-colors duration-200"
                    >
                      <Youtube className="w-5 h-5" />
                      <span className="text-sm">YouTube</span>
                    </a>
                    <a 
                      href="https://instagram.com/advicewala" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-foreground/70 hover:text-gold transition-colors duration-200"
                    >
                      <Instagram className="w-5 h-5" />
                      <span className="text-sm">Instagram</span>
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Quick Links */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h4 className="font-semibold text-gold mb-4">Explore</h4>
                  <ul className="space-y-3">
                    {["About Us", "Services", "Our Approach", "Disclaimer"].map((link) => (
                      <li key={link}>
                        <a 
                          href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-primary-foreground/70 hover:text-gold transition-colors duration-200"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Topics */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h4 className="font-semibold text-gold mb-4">Topics</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-primary-foreground/70">
                      <BookOpen className="w-4 h-4 text-gold" />
                      Investment Basics
                    </li>
                    <li className="flex items-center gap-2 text-primary-foreground/70">
                      <TrendingUp className="w-4 h-4 text-gold" />
                      Stock Markets
                    </li>
                    <li className="flex items-center gap-2 text-primary-foreground/70">
                      <PiggyBank className="w-4 h-4 text-gold" />
                      Commodity Markets
                    </li>
                    <li className="flex items-center gap-2 text-primary-foreground/70">
                      <Bitcoin className="w-4 h-4 text-gold" />
                      Cryptocurrency
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Bottom Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 pt-8 border-t border-primary-foreground/10"
            >
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
                <p>© {currentYear} Advicewala. All rights reserved.</p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                  Educational Purpose Only | No Guaranteed Returns
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
