import { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import { fetchArticleById } from "../lib/api";
import { FaTwitter, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer";
import { fetchRelatedArticles } from "../lib/api";


type Article = {
  _id: string;
  title: string;
  content: string;
  category: string;
  image?: string | null;
  createdAt: string;
};

type Props = {
  article: Article | null;
  relatedArticles: Article[];
};


export default function ArticlePage({ article, relatedArticles  }: Props) {
  if (!article) {
    return <p style={{ textAlign: "center", marginTop: 40 }}>لم يتم العثور على المقال.</p>;
  }

  const baseUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : process.env.NEXT_PUBLIC_BASE_URL || "https://almaarifamagazine.vercel.app/";

  const shareUrl = `${baseUrl}/${article._id}`;
  const imageUrl = article.image || `${baseUrl}/default.jpg`;

  const encodedTitle = encodeURIComponent(article.title);

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodeURIComponent(shareUrl)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodeURIComponent(shareUrl)}`;

  return (
    <>
      <Head>
        <title>{article.title}</title>
        <link rel="icon" href="/logo.png" />
        <meta name="description" content={article.content.slice(0, 150)} />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 

        <meta name="google-site-verification" content="O1netl10RwInIUmxF8lpN1qqE7cBow_ZJjDSodqR110" />

        {/* Open Graph meta tags */}
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.content.slice(0, 150)} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content={`صورة عن ${article.title}`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.content.slice(0, 150)} />
        <meta name="twitter:image" content={imageUrl} />




      </Head>

      {/* anonce 1 */}
      {/*

          <Script
              id="adsbygoogle-init"
              strategy="afterInteractive"
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4295602876718090"
              crossOrigin="anonymous"
            />


      
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4295602876718090"
        data-ad-slot="2278398104"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
     

      <Script id="adsbygoogle-fill" strategy="afterInteractive">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>

       */}
       

      <Header />

      <article
        style={{
          padding: 20,
          maxWidth: 800,
          margin: "40px auto",
          direction: "rtl",
          fontFamily: "'Tajawal', Arial, sans-serif",
          lineHeight: 1.7,
          color: "#333",
          wordWrap: "break-word",
          whiteSpace: "normal",
        }}
      >
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            style={{
              width: "100%",
              maxHeight: 400,
              objectFit: "cover",
              borderRadius: 8,
              marginBottom: 20,
            }}
          />
        )}

        <h1 style={{ fontWeight: "bold", fontSize: "2rem", marginBottom: 10 }}>{article.title}</h1>
        <p style={{ fontStyle: "italic", color: "#555", marginBottom: 25 }}>{article.category}</p>

        <p
          style={{
            direction: "rtl",
            whiteSpace: "pre-line",
            fontSize: "1.15rem",
            marginBottom: 30,
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          {article.content}
        </p>

        {/* أزرار المشاركة */}
        <div style={{ display: "flex", gap: 20, marginTop: 40, alignItems: "center" }}>
          <a
            href={twitterShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", color: "#1da1f2", textDecoration: "none" }}
          >
            <FaTwitter size={24} style={{ marginLeft: 8 }} />
            <span>شارك على تويتر</span>
          </a>

          <a
            href={facebookShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", color: "#4267B2", textDecoration: "none" }}
          >
            <FaFacebookF size={24} style={{ marginLeft: 8 }} />
            <span>شارك على فيسبوك</span>
          </a>

          <a
            href={whatsappShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", color: "#25D366", textDecoration: "none" }}
          >
            <FaWhatsapp size={24} style={{ marginLeft: 8 }} />
            <span>شارك على واتساب</span>
          </a>
        </div>
      </article>

      <h2 style={{ marginTop: 50, fontSize: "1.5rem", fontWeight: "bold" }}>مواضيع ذات صلة</h2>
<div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", marginTop: 20 }}>
  {relatedArticles.map((rel) => (
    <a key={rel._id} href={`/${rel._id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div style={{ border: "1px solid #ccc", borderRadius: 8, padding: 10, height: "100%", background: "#fafafa" }}>
        {rel.image && (
          <img src={rel.image} alt={rel.title} style={{ width: "100%", height: 120, objectFit: "cover", borderRadius: 5 }} />
        )}
        <h3 style={{ fontSize: "1rem", marginTop: 10 }}>{rel.title}</h3>
      </div>
    </a>
  ))}
</div>
      {/* anonce 2 */}

        {/*
          <Script
              id="adsbygoogle-init-bottom"
              strategy="afterInteractive"
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4295602876718090"
              crossOrigin="anonymous"
            />
       <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-4295602876718090"
          data-ad-slot="2110877144"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <Script id="adsbygoogle-fill-bottom" strategy="afterInteractive">
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>

         */}
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  if (!id || Array.isArray(id)) {
    return { notFound: true };
  }

  try {
    const article = await fetchArticleById(id);
    if (!article) return { notFound: true };

    const relatedArticles = await fetchRelatedArticles(article.category, article._id);

    return {
      props: {
        article,
        relatedArticles, // ترسل للمكون الرئيسي
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

