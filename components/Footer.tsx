// components/Footer.tsx
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f2f2f2",
        padding: "40px 20px",
        marginTop: 60,
        borderTop: "1px solid #ddd",
        fontFamily: "'Tajawal', Arial, sans-serif",
        direction: "rtl",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 20 }}>
        
        {/* About & Links */}
        <div style={{ flex: 1, minWidth: 250 }}>
          <h3 style={{ fontSize: "1.2rem", marginBottom: 10 }}>عن المجلة</h3>
          <p style={{ color: "#555", lineHeight: 1.6 }}>
            منصة رقمية تقدم محتوى متنوعًا في مجالات الآداب، الفنون، العلوم الاجتماعية، الفلسفة، التكنولوجيا، والصحة، بمساهمات من نخبة الكتاب والباحثين.
          </p>
        </div>

        {/* Contact */}
        <div style={{ flex: 1, minWidth: 200 }}>
          <h3 style={{ fontSize: "1.2rem", marginBottom: 10 }}>تواصل معنا</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: 2 }}>
            <li>
              <a href="https://www.facebook.com/share/19EUAgn9ZQ/?mibextid=wwXIfr" target="_blank" style={{ textDecoration: "none", color: "#4267B2", display: "flex", alignItems: "center" }}>
                <FaFacebookF style={{ marginLeft: 8 }} /> فيسبوك
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/majalatmaarifa?igsh=MW81cjN6dHoyZGlnNQ%3D%3D&utm_source=qr" target="_blank" style={{ textDecoration: "none", color: "#C13584", display: "flex", alignItems: "center" }}>
                <FaInstagram style={{ marginLeft: 8 }} /> إنستغرام
              </a>
            </li>
            <li>
              <a href="afaqacadimie@gmail.com" style={{ textDecoration: "none", color: "#333", display: "flex", alignItems: "center" }}>
                <FaEnvelope style={{ marginLeft: 8 }} /> info@almaarifamagazine.com
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div style={{ flex: 1, minWidth: 200 }}>
          <h3 style={{ fontSize: "1.2rem", marginBottom: 10 }}>روابط مهمة</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: 2 }}>
            <li><a href="/policy" style={{ textDecoration: "none", color: "#333" }}>سياسة الاستخدام</a></li>
            <li><a href="/about" style={{ textDecoration: "none", color: "#333" }}>نبذة عن المجلة</a></li>
          </ul>
        </div>
      </div>

      <hr style={{ margin: "30px auto", borderColor: "#ccc", maxWidth: 1000 }} />

      <div style={{ textAlign: "center", color: "#777", fontSize: "0.9rem" }}>
        © {new Date().getFullYear()} المجلة المعرفية - جميع الحقوق محفوظة
      </div>
    </footer>
  );
}
