import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from './Link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-purple-500 mr-2" />
              <span className="text-xl font-bold">Sharan Foundation</span>
            </div>
            <p className="text-gray-400 mb-6">
              Fostering gender justice and equality in society through education, advocacy, and community support.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-purple-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-purple-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-purple-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-purple-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#programs" className="text-gray-400 hover:text-white transition-colors">Our Programs</Link>
              </li>
              <li>
                <Link href="#impact" className="text-gray-400 hover:text-white transition-colors">Our Impact</Link>
              </li>
              <li>
                <Link href="#team" className="text-gray-400 hover:text-white transition-colors">Team</Link>
              </li>
              <li>
                <Link href="#news" className="text-gray-400 hover:text-white transition-colors">News</Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Volunteer</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Donate</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Partnership</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Events</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Resources</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">123 Main Street, Patna, Bihar, India</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                <a href="mailto:sharan.gender.foundation@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  sharan.gender.foundation@gmail.com
                </a>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91 1234 567 890</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sharan Foundation. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}