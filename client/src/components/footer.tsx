export default function Footer() {
  return (
    <footer className="bg-[var(--dark)] py-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-primary mb-4">GFX Town</div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional graphic design services that bring your vision to life. Creating stunning visuals that make an impact.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/gfx.tw/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover-lift"
              >
                <i className="fab fa-instagram text-white"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Logo Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Brand Identity</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Video Graphics</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Motion Design</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>workforgraphixtown@gmail.com</li>
              <li>Quick 24h Response</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 GFX Town. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
