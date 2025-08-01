import { Lightbulb, Users, Rocket } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">GFX Town</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              We are a passionate team of creative professionals dedicated to bringing your vision to life through stunning graphic design and visual storytelling.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="text-primary text-xl w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Creative Excellence</h3>
                  <p className="text-gray-400">We push creative boundaries to deliver unique and impactful designs that stand out.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="text-accent text-xl w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Client-Focused</h3>
                  <p className="text-gray-400">Your success is our priority. We work closely with you to achieve your goals.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Rocket className="text-secondary text-xl w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-gray-400">We understand deadlines matter and deliver quality work on time, every time.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Creative design workspace with graphics tools" 
              className="rounded-2xl shadow-2xl w-full" 
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-2xl animate-float"></div>
            <div 
              className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-secondary to-primary rounded-full animate-float" 
              style={{ animationDelay: '3s' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
