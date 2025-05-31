import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // تأكد من تثبيت هذه الحزمة





const categories = [
  "آداب وفنون",
  "العلوم الاجتماعية",
  "فكر وفلسفة",
  "علوم وتكنولوجيا",
  "السياسة",
  "منوعات",
  "كتاب وآراء"
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCategoryClick = () => {
    setMenuOpen(false);
  };

  return (
    <header dir="rtl" style={styles.header}>
      <div style={styles.logoContainer}>
        <Link href="/" legacyBehavior>
          <a style={styles.logoLink}>
            <img src="logo.png" alt="Logo" style={styles.logoImage} />
            مجلة المعرفة
          </a>
        </Link>
      </div>

      {/* زر القائمة في الجوال */}
      {isMobile && (
        <button onClick={() => setMenuOpen(!menuOpen)} style={styles.menuButton}>
          {menuOpen ? <X color="#fff" /> : <Menu color="#fff" />}
        </button>
      )}

      {/* قائمة التصنيفات */}
      {(!isMobile || menuOpen) && (
        <nav style={isMobile ? styles.mobileNav : styles.desktopNav}>
          <Link href="/" legacyBehavior>
            <a style={{ ...styles.navLink, fontWeight: "bold" }} onClick={handleCategoryClick}>
              الرئيسية
            </a>
          </Link>
          <ul style={isMobile ? styles.mobileNavList : styles.navList}>
            {categories.map((cat) => (
              <li key={cat} style={styles.navItem}>
                <Link href={`/?category=${encodeURIComponent(cat)}`} legacyBehavior>
                  <a style={styles.navLink} onClick={handleCategoryClick}>{cat}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1e40af",
    padding: "10px 20px",
    position: "sticky" as const,
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logoLink: {
  display: "flex",
  alignItems: "center",
  gap: "10px",               // مسافة بين الشعار والنص
  color: "#fff",
  textDecoration: "none",
  fontWeight: "700",          // خط عريض
  fontSize: "1.6rem",         // حجم خط أكبر قليلاً
  fontFamily: "'Tajawal', sans-serif", // خط عربي أنيق
  textShadow: "1px 1px 4px rgba(0,0,0,0.6)", // ظل خفيف للنص لتمييزه على الخلفية
  transition: "color 0.3s ease",
  cursor: "pointer",
  userSelect: "none",

  // تأثير عند المرور بالفأرة (hover)
  ":hover": {
    color: "#ffd700",           // لون ذهبي جميل عند التمرير
    textShadow: "2px 2px 6px rgba(255, 215, 0, 0.8)",
  },
},

  logoImage: {
    height: 40,
    marginRight: 10,
  },
  menuButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 8,
  },
  navList: {
    display: "flex",
    listStyle: "none",
    gap: "15px",
    margin: 0,
    padding: 0,
  },
  mobileNavList: {
    listStyle: "none",
    padding: 0,
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    direction: "rtl" as const,
  },
  navItem: {
    transition: "transform 0.2s ease, background 0.3s ease",
  },
  navLink: {
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: "20px",
    backgroundColor: "transparent",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 500,
    transition: "all 0.3s ease",
  },
  desktopNav: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  mobileNav: {
    position: "absolute" as const,
    top: "70px",
    right: "20px",
    backgroundColor: "#1e40af",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
} as const;
