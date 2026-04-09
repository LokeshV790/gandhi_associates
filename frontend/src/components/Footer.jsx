import React from 'react';
import { ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
          <a 
            href="https://app.emergent.sh/?utm_source=emergent-badge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-colors font-medium"
          >
            <span>Made with Emergent</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;