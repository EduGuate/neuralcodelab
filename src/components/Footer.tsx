import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Neural Code Lab</h2>
            <p className="text-gray-300">Creating free software to benefit communities and individuals who want to learn.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/neuralcodelab" aria-label="Facebook" className="text-2xl hover:text-blue-400 transition-colors">
                📘
              </a>
              <a href="https://twitter.com/neuralcodelab" aria-label="Twitter" className="text-2xl hover:text-blue-400 transition-colors">
                🐦
              </a>
              <a href="https://linkedin.com/company/neuralcodelab" aria-label="LinkedIn" className="text-2xl hover:text-blue-400 transition-colors">
                💼
              </a>
              <a href="https://instagram.com/neuralcodelab" aria-label="Instagram" className="text-2xl hover:text-blue-400 transition-colors">
                📷
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Neural Code Lab. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-gray-500 flex items-center justify-center">
            Made with ❤️ by the Neural Code Lab team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;