import { Download } from 'lucide-react';

export default function LeadMagnet() {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl relative bg-[#1c1b1b]">
        
        <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col items-start justify-center">
          <div className="bg-[#6c5500]/20 text-vsecondary border border-[#6c5500]/50 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase mb-6">
            QUÀ TẶNG GIỚI HẠN
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] mb-8">
            Tặng Bạn:<br />
            Mindmap Topic<br />
            Speaking Miễn<br />
            Phí
          </h2>
          
          <div className="flex flex-col gap-6 w-full mb-10">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-vprimary flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span className="text-gray-300 text-sm leading-snug">
                Hệ thống hóa toàn bộ 20+ chủ đề Speaking thường gặp nhất trong kỳ thi VSTEP.
              </span>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-vprimary flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span className="text-gray-300 text-sm leading-snug">
                Cấu trúc 3 phần rõ ràng: Social Interaction, Solution Discussion, Topic Development.
              </span>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-vprimary flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span className="text-gray-300 text-sm leading-snug">
                Từ vựng ăn điểm (Vocab highlights) cho từng nhánh chủ đề.
              </span>
            </div>
          </div>
          
          <button className="btn-primary w-full sm:w-auto px-8 py-3.5 text-sm">
            <Download size={18} className="mr-2" />
            Tải Xuống Ngay
          </button>
        </div>
        
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 min-h-[400px]">
           {/* Fake Mindmap Graphic Overlay positioned better */}
           <div className="relative w-full max-w-sm flex items-center justify-center">
              <div className="flex items-center max-w-full scale-100 transform origin-left shadow-lg bg-white p-4 rounded-xl border border-gray-100">
                <div className="rounded-full border-[3px] border-vprimary shrink-0 font-bold text-center text-vprimary text-[11px] leading-tight w-20 h-20 flex items-center justify-center bg-white z-10">
                  VSTEP<br/>Speaking<br/>Topics
                </div>
                <div className="flex flex-col gap-4 shrink z-0 -ml-2">
                  <div className="flex items-center">
                    <div className="w-8 h-0.5 bg-red-400"></div>
                    <div className="border border-red-500 text-[10px] text-red-600 px-3 py-1.5 rounded-full whitespace-nowrap bg-white font-medium">Part 1: Social Interaction</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-0.5 bg-red-400"></div>
                    <div className="border border-red-500 text-[10px] text-red-600 px-3 py-1.5 rounded-full whitespace-nowrap bg-white font-medium">Part 2: Solution Discussion</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-0.5 bg-red-400"></div>
                    <div className="border border-red-500 text-[10px] text-red-600 px-3 py-1.5 rounded-full whitespace-nowrap bg-white font-medium">Part 3: Topic Development</div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        
      </div>
    </section>
  );
}
