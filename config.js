// ============================================================
// FILE DUY NHẤT CẦN SỬA khi đổi dịp lễ (Tết Tây, Tết Ta, 8/3...)
// ============================================================
window.SITE = {
  slug: "noel-2026",                 // đổi slug mỗi dịp để bộ nhớ "không trùng" được làm mới
  pageTitle: "Thiệp chúc Giáng Sinh",
  brand: "Tôi muốn gửi tặng bạn một món quà nhỏ trong đêm Noel ấm áp này",
  headline: "Mừng Chúa Giáng Sinh",
  tagline: "🎄🎄🎄🎄🎄🎄",
  chooseTitle: "Mời bạn chọn",
  giftButton: "🎁 Mở quà nhận lời chúc",
  againButton: "Nhận lời chúc khác",
  backButton: "← Chọn lại",
  shareButton: "Gửi thiệp này cho người thân",
  footer: "Làm với tất cả tấm lòng · Giáng Sinh an lành ❤",
  music: "music/noel.mp3",
  bgDashboard: "images/hang-da.jpg",
  theme: { bg1: "#0f3d2e", bg2: "#7a1f2b", gold: "#f5d78e", paper: "#fff8ec", ink: "#4a2c1d" },

  options: [
    {
      id: "congiao", icon: "⛪", label: "Dành cho bạn Công giáo",
      desc: "Lời Chúa & lời chúc mừng Giáng Sinh",
      // Lưu ý: hãy đối chiếu câu Kinh Thánh với bản dịch bạn dùng (vd. Nhóm Phiên Dịch CGKPV)
      wishes: (window.WISHES || {}).congiao || []
    },
    {
      id: "ngoaidao", icon: "🎅", label: "Xem lời chúc",
      desc: "Lời chúc mừng Giáng Sinh",
      wishes: (window.WISHES || {}).ngoaidao || []
    }
  ]
};
