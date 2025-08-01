import { useConfig } from "@/hooks/use-config";
import { Check } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
  color: string;
}

export default function ServicesSection() {
  const { data: services, isLoading, error } = useConfig<Service[]>('/config/services.json');

  const getIconClass = (icon: string) => {
    const iconMap: { [key: string]: string } = {
      'palette': 'fas fa-palette',
      'video': 'fas fa-video',
      'magic': 'fas fa-magic',
      'brush': 'fas fa-paint-brush',
      'computer': 'fas fa-desktop'
    };
    return iconMap[icon] || 'fas fa-star';
  };

  if (isLoading) {
    return (
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-primary">Services</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We offer comprehensive graphic design solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="glass-morphism p-8 rounded-2xl animate-pulse">
                <div className="w-12 h-12 bg-gray-700 rounded mb-6"></div>
                <div className="h-8 bg-gray-700 rounded mb-4"></div>
                <div className="h-20 bg-gray-700 rounded mb-6"></div>
                <div className="space-y-2 mb-6">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="h-4 bg-gray-700 rounded"></div>
                  ))}
                </div>
                <div className="h-8 bg-gray-700 rounded w-24"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !services) {
    return (
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-primary">Services</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We offer comprehensive graphic design solutions tailored to your needs
            </p>
          </div>
          <div className="text-center text-gray-400">
            Unable to load services
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-primary">Services</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive graphic design solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-morphism p-8 rounded-2xl hover-lift">
              <div className={`text-4xl mb-6 ${service.color}`}>
                <i className={getIconClass(service.icon)}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">
                {service.description}
              </p>
              <ul className="text-sm text-gray-300 mb-6 space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-4 h-4 text-accent mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-2xl font-bold text-primary">{service.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
