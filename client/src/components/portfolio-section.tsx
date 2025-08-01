import { useState } from "react";
import { useConfig } from "@/hooks/use-config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PortfolioItem {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  featured: boolean;
}

export default function PortfolioSection() {
  const { data: portfolioItems, isLoading, error } = useConfig<PortfolioItem[]>('/config/portfolio.json');
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', 'graphics', 'video', 'motion'];

  const filteredItems = portfolioItems?.filter(item => 
    activeFilter === 'all' || item.category.toLowerCase() === activeFilter
  ) || [];

  if (isLoading) {
    return (
      <section id="portfolio" className="py-20 bg-[var(--dark-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-accent">Portfolio</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Check out some of our recent work and see what we can create for you
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl animate-pulse">
                <div className="w-full h-64 bg-gray-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !portfolioItems) {
    return (
      <section id="portfolio" className="py-20 bg-[var(--dark-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-accent">Portfolio</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Check out some of our recent work and see what we can create for you
            </p>
          </div>
          <div className="text-center text-gray-400">
            Unable to load portfolio items
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-20 bg-[var(--dark-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-accent">Portfolio</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Check out some of our recent work and see what we can create for you
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-[var(--dark)] rounded-xl p-1">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveFilter(category)}
                variant={activeFilter === category ? "default" : "ghost"}
                className={`px-6 py-3 capitalize ${
                  activeFilter === category 
                    ? 'bg-primary text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl hover-lift">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-64 object-cover transition-transform group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                    {item.featured && (
                      <Badge variant="default" className="text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="gradient-border hover-lift">
            <Button className="bg-[var(--dark-secondary)] px-8 py-4 rounded-xl font-semibold hover:bg-[var(--dark)]">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
