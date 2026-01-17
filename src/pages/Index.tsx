import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Approach from "@/components/sections/Approach";
import Audience from "@/components/sections/Audience";
import Disclaimer from "@/components/sections/Disclaimer";
import Footer from "@/components/sections/Footer";
import FloatingSocialButtons from "@/components/FloatingSocialButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingSocialButtons />
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <Audience />
        <Disclaimer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
