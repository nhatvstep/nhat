import { motion } from 'motion/react';
import { ArrowRight, BadgeCheck, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-36 pb-16 overflow-hidden px-4 md:px-6 flex flex-col items-center text-center">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-vprimary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 relative flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-vprimary/20 px-4 py-1.5 rounded-full mb-8 bg-vprimary/5"
        >
          <BadgeCheck size={14} className="text-gray-400" />
          <span className="text-gray-300 font-medium text-xs tracking-wide">CẬP NHẬT LỘ TRÌNH 2026</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight leading-[1.2] mb-6"
        >
          Chinh Phục Chứng Chỉ <span className="text-vprimary font-extrabold">VSTEP B1-B2</span><br className="hidden md:block"/>
          <span className="font-extrabold">Một Cách Khoa Học</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed mb-10 px-4"
        >
          NhatVstep đồng hành cùng bạn trên hành trình chinh phục tiếng Anh chuyên sâu bằng phương pháp giảng dạy kỹ thuật cao, tối ưu hóa thời gian và cam kết kết quả.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <button className="btn-primary text-base px-8 py-3.5 sm:min-w-[180px]">
            Bắt Đầu Ngay
          </button>
          <button className="btn-secondary text-base px-8 py-3.5 sm:min-w-[180px] bg-[#1a1a1a]">
            Xem Lộ Trình
          </button>
        </motion.div>
        
        {/* Stats inline */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-20 text-center w-full max-w-3xl border-t border-white/5 pt-10"
        >
          <div className="flex flex-col gap-1">
            <span className="text-xl md:text-2xl text-white font-medium">5000+</span>
            <span className="text-xs tracking-wider text-gray-400 uppercase font-medium">HỌC VIÊN</span>
          </div>
          
          <div className="flex flex-col gap-1 border-y sm:border-y-0 sm:border-x border-white/5 py-4 sm:py-0 sm:px-10 md:px-20">
            <span className="text-base text-white font-medium mb-1">Đánh giá 4.9/5</span>
            <div className="flex gap-1 justify-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} className="text-vsecondary fill-vsecondary" />
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-1">
            <span className="text-base text-gray-300 font-medium">Tài liệu 2026</span>
            <span className="text-xs tracking-wider text-gray-400 uppercase font-medium">CẬP NHẬT MỚI NHẤT</span>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
