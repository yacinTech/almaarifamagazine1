import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import { fetchAllArticles } from "../lib/api";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

// داخل JSX
<Image src="/logo.png" alt="Logo" width={40} height={40} />


type Article = {
  _id: string;
  title: string;
  content: string;
  category: string;
  image?: string | null;
  createdAt: string;
};

export default function Home() {
  const router = useRouter();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  // Get category filter from query param
  const categoryFilter = typeof router.query.category === "string" ? router.query.category : null;

  useEffect(() => {
    async function loadArticles() {
      try {
        const all = await fetchAllArticles();
        // فلترة المقالات حسب التصنيف إن وجد
        const filtered = categoryFilter
          ? all.filter((a: Article) => a.category === categoryFilter)
          : all;
        // ترتيب حسب الأحدث
        filtered.sort((a: Article, b: Article) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setArticles(filtered);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadArticles();
  }, [categoryFilter]);

  return (
    <>
      <Head>
        <title>مجلة المعرفة - الصفحة الرئيسية</title>
        <meta name="description" content="أحدث المقالات من جميع التصنيفات" />
        <meta name="google-site-verification" content="O1netl10RwInIUmxF8lpN1qqE7cBow_ZJjDSodqR110" />

        
      </Head>

      <Header />

      <main style={{ padding: "20px" }}>
        {loading && <p>جاري التحميل...</p>}
        {!loading && articles.length === 0 && <p>لا توجد مقالات.</p>}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
          {articles.map((article) => (
            <article key={article._id} style={cardStyle}>
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  style={{ width: "100%", height: 180, objectFit: "cover" }}
                />
              )}
              <h2>{article.title}</h2>
              <p>{article.content.slice(0, 120)}...</p>
              <p style={{ fontStyle: "italic", color: "#555" }}>{article.category}</p>
              

            {/* داخل الجزء اللي تعرض فيه المقال، مثلاً أسفل المحتوى: */}
            <Link href={`/${article._id}`}legacyBehavior>
              <a
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  backgroundColor: "#0070f3",
                  color: "#fff",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  transition: "background-color 0.3s ease, transform 0.2s ease",
                  boxShadow: "0 4px 14px rgba(0, 118, 255, 0.39)",
                  marginTop: 20,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#0051a3";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#0070f3";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                }}
              >
                اقرأ المزيد
              </a>
            </Link>

            </article>
          ))}
        </div>
      </main>
    </>
  );
}

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: 8,
  padding: 15,
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
};

