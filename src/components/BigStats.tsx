export default function BigStats() {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="glass-card p-10 text-center border-t-2 border-t-vprimary bg-[#171717] rounded-xl flex flex-col items-center">
          <div className="text-5xl font-black tracking-tight text-vprimary mb-4">95%</div>
          <div className="font-bold text-sm text-gray-200 mb-3 px-2">Học viên đỗ ngay lần đầu</div>
          <div className="text-xs text-gray-400 leading-relaxed max-w-[220px]">
            Kết quả minh chứng cho hiệu quả của phương pháp khoa học.
          </div>
        </div>
        
        <div className="glass-card p-10 text-center border-t-2 border-t-vsecondary bg-[#171717] rounded-xl flex flex-col items-center">
          <div className="text-5xl font-black tracking-tight text-vsecondary mb-4">10k+</div>
          <div className="font-bold text-sm text-gray-200 mb-3 px-2">Giờ học mỗi tháng</div>
          <div className="text-xs text-gray-400 leading-relaxed max-w-[220px]">
            Cộng đồng học tập sôi nổi và kỷ luật mỗi ngày.
          </div>
        </div>
        
        <div className="glass-card p-10 text-center border-t-2 border-t-vtertiary bg-[#171717] rounded-xl flex flex-col items-center">
          <div className="text-5xl font-black tracking-tight text-[#b8b8ff] mb-4">500+</div>
          <div className="font-bold text-sm text-gray-200 mb-3 px-2">Bộ đề thi thử</div>
          <div className="text-xs text-gray-400 leading-relaxed max-w-[220px]">
            Kho tàng tài liệu đồ sộ được cập nhật liên tục hàng quý.
          </div>
        </div>

      </div>
    </section>
  )
}
