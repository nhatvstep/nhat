import { Menu, GraduationCap } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap className="text-vprimary" size={28} />
          <span className="font-bold text-xl tracking-tight">
            <span className="text-white">Nhat</span><span className="text-vprimary">Vstep</span>
          </span>
        </div>
        
        <div className="md:hidden">
          <Menu className="text-gray-300 hover:text-white transition-colors" size={24} />
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#trang-chu" className="text-white font-bold transition-colors">Trang chủ</a>
          <a href="#lo-trinh" className="hover:text-white transition-colors">Lộ trình</a>
          <a href="#tai-lieu" className="hover:text-white transition-colors">Tài liệu</a>
          <a href="#cong-dong" className="hover:text-white transition-colors">Cộng đồng</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
