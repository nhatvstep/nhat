import { GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <div className="flex items-center gap-2 mb-8">
          <GraduationCap className="text-vprimary" size={24} />
          <span className="font-bold text-xl tracking-tight">
            <span className="text-white">Nhat</span><span className="text-vprimary">Vstep</span>
          </span>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-medium text-sm text-white mb-10">
          <a href="#" className="hover:text-vprimary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-vprimary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-vprimary transition-colors">Contact Support</a>
        </div>
        
        <div className="text-center text-xs text-gray-500 font-medium">
          &copy; 2024 NhatVstep. Elevate Your Learning.
        </div>
        
      </div>
    </footer>
  )
}
