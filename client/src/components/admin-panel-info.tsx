import { Info, Check, FileText, Github, Settings, Globe } from "lucide-react";

export default function AdminPanelInfo() {
  return (
    <section className="py-12 bg-[var(--dark)] border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--dark-secondary)] rounded-2xl p-8 border border-gray-600">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Info className="text-accent text-xl w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Content Management for GitHub Pages</h3>
              <p className="text-gray-400 mb-4">
                Since GitHub Pages only supports static hosting, content is managed through JSON configuration files. 
                This approach provides easy content updates without requiring a database.
              </p>
              <ul className="space-y-2 text-sm text-gray-300 mb-6">
                <li className="flex items-center">
                  <Check className="text-accent mr-2 w-4 h-4" />
                  <strong>JSON Configuration Files:</strong> Edit content through structured files in /public/config/
                </li>
                <li className="flex items-center">
                  <Github className="text-accent mr-2 w-4 h-4" />
                  <strong>GitHub Web Editor:</strong> Use GitHub's built-in file editor to update content directly
                </li>
                <li className="flex items-center">
                  <Settings className="text-accent mr-2 w-4 h-4" />
                  <strong>Easy Deployment:</strong> Changes automatically deploy via GitHub Actions
                </li>
                <li className="flex items-center">
                  <Globe className="text-accent mr-2 w-4 h-4" />
                  <strong>No Server Required:</strong> Fully static site with dynamic-feeling content management
                </li>
              </ul>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-[var(--dark)] rounded-lg border border-gray-600">
                  <div className="flex items-center mb-2">
                    <FileText className="text-primary mr-2 w-4 h-4" />
                    <strong className="text-sm">Configuration Files</strong>
                  </div>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• /public/config/stats.json - Company statistics</li>
                    <li>• /public/config/services.json - Service offerings</li>
                    <li>• /public/config/portfolio.json - Portfolio items</li>
                    <li>• /public/config/contact.json - Contact information</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-[var(--dark)] rounded-lg border border-gray-600">
                  <div className="flex items-center mb-2">
                    <Github className="text-secondary mr-2 w-4 h-4" />
                    <strong className="text-sm">How to Update</strong>
                  </div>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• Navigate to your GitHub repository</li>
                    <li>• Edit files in /client/public/config/</li>
                    <li>• Commit changes to trigger auto-deploy</li>
                    <li>• Changes appear live within minutes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
