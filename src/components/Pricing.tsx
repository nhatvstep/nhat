export default function Pricing() {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-[2rem] border border-[#393939] bg-[#1a1a1a] p-8 md:p-14 overflow-hidden flex flex-col md:flex-row items-center gap-10">
          
          <div className="absolute top-0 right-8 bg-vprimary text-white font-medium px-4 py-1.5 rounded-b-lg text-[10px] tracking-wider uppercase">
            BEST SELLER
          </div>
          
          <div className="w-full md:w-3/5 flex flex-col items-start text-left z-10">
             <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-1">
               ANKI BUNDLE<br/>
               VĨNH VIỄN
             </h2>
             
             <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-4 mb-8 max-w-sm">
               Sở hữu trọn bộ flashcards thông minh cho 4 kỹ năng Nghe - Nói - Đọc - Viết. Chỉ cần mua một lần, sử dụng trọn đời.
             </p>
             
             <div className="flex flex-col gap-4 w-full">
               <div className="flex items-start gap-4">
                 <div className="w-5 h-5 rounded-full border border-vprimary/50 flex items-center justify-center shrink-0 mt-0.5">
                   <svg className="w-3 h-3 text-vprimary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                 </div>
                 <span className="text-gray-300 text-sm">3000+ Flashcards từ vựng chuyên sâu</span>
               </div>
               <div className="flex items-start gap-4">
                 <div className="w-5 h-5 rounded-full border border-vprimary/50 flex items-center justify-center shrink-0 mt-0.5">
                   <svg className="w-3 h-3 text-vprimary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                 </div>
                 <span className="text-gray-300 text-sm">Mẫu câu Speaking - Writing ăn điểm</span>
               </div>
               <div className="flex items-start gap-4">
                 <div className="w-5 h-5 rounded-full border border-vprimary/50 flex items-center justify-center shrink-0 mt-0.5">
                   <svg className="w-3 h-3 text-vprimary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                 </div>
                 <span className="text-gray-300 text-sm">Đồng bộ mọi thiết bị (Mobile/Web/PC)</span>
               </div>
               <div className="flex items-start gap-4">
                 <div className="w-5 h-5 rounded-full border border-vprimary/50 flex items-center justify-center shrink-0 mt-0.5">
                   <svg className="w-3 h-3 text-vprimary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                 </div>
                 <span className="text-gray-300 text-sm">Cập nhật đề thi mới nhất miễn phí</span>
               </div>
             </div>
          </div>
          
          <div className="w-full md:w-2/5 flex flex-col items-center bg-[#232323] p-8 rounded-2xl border border-white/5 shadow-2xl relative z-10 w-full sm:max-w-xs">
            <div className="text-gray-400 font-bold text-xl line-through decoration-vprimary decoration-2 mb-2">999k</div>
            <div className="text-5xl font-black text-white tracking-tighter mb-8">350k</div>
            
            <button className="btn-primary w-full py-4 text-sm font-bold uppercase tracking-wider mb-6 text-center leading-tight">
              NÂNG CẤP<br/>NGAY
            </button>
            
            <div className="text-[10px] text-gray-400 font-medium italic text-center leading-snug">
              Ưu đãi còn lại cho 24 học<br/>viên cuối cùng
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
