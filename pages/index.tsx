import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import { fetchAllArticles } from "../lib/api";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Footer from "../components/Footer";

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
  const [visibleCount, setVisibleCount] = useState(9); // عرض أول 10 مقالات فقط
  const [loading, setLoading] = useState(true);

  const imageUrl = "https://almaarifamagazine.vercel.app/logo.png";
  const shareUrl = "https://almaarifamagazine.vercel.app/";
  const canonicalUrl = (`https://almaarifamagazine.vercel.app` + router.asPath).split("?")[0];

  const categoryFilter = typeof router.query.category === "string" ? router.query.category : null;

  useEffect(() => {
    async function loadArticles() {
      try {
        const all = await fetchAllArticles();
        const filtered = categoryFilter
          ? all.filter((a: Article) => a.category === categoryFilter)
          : all;

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

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  return (
    <>
      <Head>
        <title>مجلة المعرفة - الصفحة الرئيسية</title>
        <link rel="icon" href="/logo.png" />
        <meta name="description" content="منصة رقمية تقدم محتوى متنوعًا في مجالات الآداب، الفنون، العلوم الاجتماعية، الفلسفة، التكنولوجيا، والصحة، بمساهمات من نخبة الكتاب والباحثين" />
        <meta name="google-site-verification" content="O1netl10RwInIUmxF8lpN1qqE7cBow_ZJjDSodqR110" />
        <meta property="og:title" content="مجلة المعرفة - الصفحة الرئيسية" />
        <meta property="og:description" content="منصة رقمية تقدم محتوى متنوعًا في مجالات الآداب، الفنون، العلوم الاجتماعية، الفلسفة، التكنولوجيا، والصحة، بمساهمات من نخبة الكتاب والباحثين" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content="غلاف مجلة المعرفة" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="مجلة المعرفة - الصفحة الرئيسية" />
        <meta name="twitter:description" content="منصة رقمية تقدم محتوى متنوعًا في مجالات الآداب، الفنون، العلوم الاجتماعية، الفلسفة، التكنولوجيا، والصحة، بمساهمات من نخبة الكتاب والباحثين" />
        <meta name="twitter:image" content={imageUrl} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <Header />

      <main style={{ padding: "20px" }}>
        {loading && <p>جاري التحميل...</p>}
        {!loading && articles.length === 0 && <p>لا توجد مقالات.</p>}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
          {articles.slice(0, visibleCount).map((article) => (
            <article key={article._id} style={cardStyle}>
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  style={{ width: "100%", height: 180, objectFit: "cover" }}
                />
              )}
              <h1>{article.title}</h1>
              <p>{article.content.slice(0, 120)}...</p>
              <p style={{ fontStyle: "italic", color: "#555" }}>{article.category}</p>

              <Link href={`/${article._id}`} legacyBehavior>
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
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#0051a3";
                    (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
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

        {/* زر تحميل المزيد */}
        {visibleCount < articles.length && (
          <div style={{ textAlign: "center", marginTop: 30 }}>
            <button
              onClick={handleLoadMore}
              style={{
                backgroundColor: "#0070f3",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              تحميل المزيد
            </button>
          </div>
        )}
      </main>

      {/* الفوتر أسفل زر التحميل فقط */}
      <div style={{ marginTop: 50 }}>
        <Footer />
      </div>
    </>
  );
}

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: 8,
  padding: 15,
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
}