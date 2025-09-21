
import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'About',
      links: [
        { name: 'Bio', href: '/about/bio' },
        { name: 'Timeline', href: '/about/timeline' },
        { name: 'Media Coverage', href: '/about/media' },
      ],
    },
    {
      title: 'Projects',
      links: [
        { name: 'Competitions', href: '/projects/competitions' },
        { name: 'Apps', href: '/projects/apps' },
        { name: 'Mentorship', href: '/projects/mentorship' },
        { name: 'Gallery', href: '/projects/gallery' },
      ],
    },
    {
      title: 'empowerED',
      links: [
        { name: 'Mission & Vision', href: '/empowered/mission-vision' },
        { name: 'Join empowerED', href: '/empowered/join' },
        { name: 'Events', href: '/empowered/events' },
        { name: 'Success Stories', href: '/empowered/success-stories' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Book - Play to Purpose', href: '/book' },
        { name: 'Media Kit', href: '/media' },
        { name: 'Contact', href: '/contact' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                Sai Pranav Gandhi
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Student innovator, national computational thinking champion, and 
                founder of empowerED - turning curiosity into meaningful action 
                through robotics and technology education.
              </p>
              <div className="flex space-x-4">
                <a
                  href="mailto:saipranav@example.com"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/saipranav"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/saipranav"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold mb-4 text-white">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="py-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <MapPin className="h-5 w-5 text-blue-400 mr-2" />
              <span className="text-gray-300">Goa, India</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Mail className="h-5 w-5 text-blue-400 mr-2" />
              <span className="text-gray-300">saipranav@example.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Phone className="h-5 w-5 text-blue-400 mr-2" />
              <span className="text-gray-300">Available for speaking engagements</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Sai Pranav Gandhi. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
