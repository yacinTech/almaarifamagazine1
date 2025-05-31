// pages/about.tsx
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>نبذة عن المجلة</title>
        <meta name="description" content="تعرّف على رسالة وأهداف المجلة المعرفية." />
      </Head>

      <Header />

      <main style={{ maxWidth: 800, margin: "40px auto", padding: "0 20px", direction: "rtl", fontFamily: "'Tajawal', sans-serif", lineHeight: 1.8 }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: 20 }}>نبذة عن المجلة</h1>

        <p>
          المجلة المعرفية هي منصة إعلامية إلكترونية تهدف إلى نشر المعرفة في مجالات الصحة العامة، التغذية، والتثقيف الصحي بأسلوب علمي بسيط وسهل الوصول.
        </p>

        <p>
          نحرص على تقديم محتوى موثوق وحديث مستند إلى مصادر علمية، مساهمين في رفع مستوى الوعي الصحي لدى الجمهور العربي.
        </p>

        <p>
          يضم فريقنا مجموعة من المختصين في مجالات متعددة يعملون بشغف لإنتاج مقالات ومحتوى تثقيفي يعزز الصحة والوعي المجتمعي.
        </p>

        <p>
          نرحب بملاحظاتكم واقتراحاتكم دائمًا، فأنتم شركاؤنا في تطوير هذه المنصة.
        </p>
      </main>

      <Footer />
    </>
  );
}
