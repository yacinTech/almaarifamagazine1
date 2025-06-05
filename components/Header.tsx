import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

const categories = [
  "آداب وفنون",
  "العلوم الاجتماعية",
  "فكر وفلسفة",
  "علوم وتكنولوجيا",
  "المجتمع والسياسة",
  "منوعات",
  "كتاب وآراء"
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchResults = async () => {
      if (searchQuery.trim() === "") {
        setSearchResults([]);
        return;
      }

      try {
        const response = await fetch(`https://fitness-magazine-backend-1.onrender.com/api/articles/search?q=${encodeURIComponent(searchQuery)}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (err) {
        console.error("فشل البحث", err);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchResults();
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  const handleCategoryClick = () => {
    setMenuOpen(false);
  };

  return (
    <header dir="rtl" style={styles.header}>
      {/* الشعار */}
      <div style={styles.logoContainer}>
        <Link href="/" legacyBehavior>
          <a style={styles.logoLink}>
            <img src="logo.png" alt="Logo" style={styles.logoImage} />
            مجلة المعرفة
          </a>
        </Link>
      </div>

      {/* البحث */}
      <div style={styles.searchContainer}>
        <button onClick={() => setShowSearch(!showSearch)} style={styles.searchIcon}>
          <Search color="#fff" />
        </button>

        {showSearch && (
          <div style={styles.searchBox}>
            <input
              type="text"
              placeholder="ابحث عن مقال..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.searchInput}
            />

            {searchResults.length > 0 && (
              <ul style={styles.resultsList}>
                {searchResults.map((article) => (
                  <li key={article._id} style={styles.resultItem}>
                    <Link href={`/${article._id}`} legacyBehavior>
                      <a style={styles.resultLink} onClick={() => setShowSearch(false)}>
                        {article.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
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
    gap: "10px",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "1.6rem",
    fontFamily: "'Tajawal', sans-serif",
    textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
    transition: "color 0.3s ease",
    cursor: "pointer",
    userSelect: "none",
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
  searchContainer: {
    position: "relative",
    marginRight: "15px",
  },
  searchIcon: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 8,
  },
  searchBox: {
    position: "absolute" as const,
    top: "40px",
    right: 0,
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    zIndex: 1001,
    minWidth: "250px",
    
    
    
 
  },  

  searchInput: {
    width: "100%",
    padding: "8px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "10px",
    direction: "rtl" as const,
  },
  resultsList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    maxHeight: "200px",
    overflowY: "auto",
  },
  resultItem: {
    marginBottom: "6px",
  },
  resultLink: {
    textDecoration: "none",
    color: "#1e40af",
    fontSize: "14px",
    transition: "color 0.3s",
  },
  
  
} as const;
