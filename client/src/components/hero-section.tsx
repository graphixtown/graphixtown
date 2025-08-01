import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/30 rounded-full animate-float"></div>
      <div 
        className="absolute top-40 right-20 w-16 h-16 bg-accent/30 rounded-lg animate-float" 
        style={{ animationDelay: '2s' }}
      ></div>
      <div 
        className="absolute bottom-20 left-1/4 w-12 h-12 bg-secondary/30 rounded-full animate-float" 
        style={{ animationDelay: '4s' }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Creative <span className="text-primary">Graphics</span><br />
          for Your <span className="text-accent">Brand</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Professional graphic design services that bring your vision to life. From logos to complete brand identities, we create stunning visuals that make an impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="gradient-border hover-lift">
            <Button 
              onClick={scrollToPortfolio}
              className="bg-[var(--dark)] px-8 py-4 rounded-xl font-semibold hover:bg-[var(--dark-secondary)]"
            >
              View Our Work
            </Button>
          </div>
          <Button 
            onClick={scrollToContact}
            className="bg-primary hover:bg-secondary px-8 py-4 rounded-xl font-semibold transition-colors hover-lift"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
