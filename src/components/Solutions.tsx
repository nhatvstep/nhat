import { Repeat2, BarChart2 } from 'lucide-react';

export default function Solutions() {
  return (
    <section className="py-20 px-4 md:px-6 relative bg-[#101010]">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Giải Pháp Học Tập Tối Ưu
          </h2>
          <div className="w-16 h-1 bg-vprimary rounded-full mt-2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          
          <div className="glass-card p-8 border border-vprimary/30 hover:border-vprimary/60 transition-colors bg-[#171717] rounded-xl flex flex-col">
             <div className="w-14 h-14 rounded-xl bg-vprimary/10 flex flex-col items-center justify-center text-vprimary mb-6">
               <Repeat2 size={28} />
             </div>
             <h3 className="text-xl font-bold text-white mb-3">Spaced Repetition (Lặp lại ngắt quãng)</h3>
             <p className="text-gray-400 text-sm leading-relaxed mb-6">
               Thuật toán thông minh tự động nhắc lại kiến thức vào "thời điểm vàng" trước khi bạn kịp quên. Giúp ghi nhớ từ vựng và cấu trúc VSTEP vĩnh viễn trong bộ não.
             </p>
             
             <div className="mt-auto space-y-3">
               <div className="flex items-start gap-3">
                 <div className="w-5 h-5 rounded-full border border-vprimary flex items-center justify-center shrink-0 mt-0.5">
                   <svg className="w-3 h-3 text-vprimary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                 </div>
                 <span className="text-gray-300 text-sm font-medium">Tối ưu hóa thời gian học 300%</span>
               </div>
               <div className="flex items-start gap-3">
                 <div className="w-5 h-5 rounded-full border border-vprimary flex items-center justify-center shrink-0 mt-0.5">
                   <svg className="w-3 h-3 text-vprimary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                 </div>
                 <span className="text-gray-300 text-sm font-medium">Ghi nhớ 50+ từ vựng mới mỗi ngày</span>
               </div>
             </div>
          </div>
          
          <div className="glass-card p-8 border border-vsecondary/30 hover:border-vsecondary/60 transition-colors bg-[#171717] rounded-xl flex flex-col">
             <div className="w-14 h-14 rounded-xl bg-vsecondary/10 flex flex-col items-center justify-center text-vsecondary mb-6">
               <BarChart2 size={24} />
             </div>
             <h3 className="text-xl font-bold text-white mb-3">Smart Analytics (Phân tích thông minh)</h3>
             <p className="text-gray-400 text-sm leading-relaxed mb-6">
               Hệ thống AI theo dõi tiến độ và điểm yếu của bạn qua từng bài thi thử. Cung cấp biểu đồ trực quan để bạn biết chính xác mình cần cải thiện kỹ năng nào.
             </p>

             <div className="mt-auto space-y-3">
               <div className="flex items-start gap-3">
                 <div className="w-5 h-5 rounded-full border border-vsecondary flex items-center justify-center shrink-0 mt-0.5">
                   <svg className="w-3 h-3 text-vsecondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                 </div>
                 <span className="text-gray-300 text-sm font-medium">Dự đoán điểm số thực tế chính xác 90%</span>
               </div>
               <div className="flex items-start gap-3">
                 <div className="w-5 h-5 rounded-full border border-vsecondary flex items-center justify-center shrink-0 mt-0.5">
                   <svg className="w-3 h-3 text-vsecondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                 </div>
                 <span className="text-gray-300 text-sm font-medium">Cá nhân hóa lộ trình dựa trên dữ liệu</span>
               </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
