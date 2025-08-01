import { useState } from "react";
import { useConfig } from "@/hooks/use-config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send } from "lucide-react";

interface ContactConfig {
  email: string;
  responseTime: string;
  availability: string;
}

export default function ContactSection() {
  const { data: contactConfig } = useConfig<ContactConfig>('/config/contact.json');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailSubject = `Project Inquiry from GFX Town Website - ${formData.subject}`;
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
This message was sent from the GFX Town website contact form.
    `.trim();
    
    const mailtoLink = `mailto:${contactConfig?.email || 'workforgraphixtown@gmail.com'}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-[var(--dark-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In <span className="text-accent">Touch</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss your ideas and bring them to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[var(--dark)] border border-gray-600 rounded-lg focus:border-primary focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[var(--dark)] border border-gray-600 rounded-lg focus:border-primary focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[var(--dark)] border border-gray-600 rounded-lg focus:border-primary focus:outline-none"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[var(--dark)] border border-gray-600 rounded-lg focus:border-primary focus:outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-secondary px-8 py-4 rounded-lg font-semibold transition-colors hover-lift"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-400">{contactConfig?.email || 'workforgraphixtown@gmail.com'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/gfx.tw/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover-lift"
                >
                  <i className="fab fa-instagram text-white text-xl"></i>
                </a>
              </div>
            </div>

            <div className="glass-morphism p-6 rounded-2xl">
              <h4 className="text-lg font-semibold mb-4">Quick Response Time</h4>
              <p className="text-gray-400 mb-4">
                {contactConfig?.responseTime || 'We typically respond to all inquiries within 24 hours.'}
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-400">
                  {contactConfig?.availability || 'Currently Available'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
