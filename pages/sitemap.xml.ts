// pages/sitemap.xml.ts
import { GetServerSideProps } from 'next';
import { fetchAllArticles } from '../lib/api';  // عدل المسار حسب مشروعك

const Sitemap = () => {
  // لا نعرض شيء لأننا نرسل XML مباشرة
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://almaarifamagazine.vercel.app';

  // جلب المقالات
  const articles = await fetchAllArticles();

  // توليد روابط المقالات
    const articleUrls = articles.map((article: { _id: string; createdAt?: string | null }) => `
    <url>
        <loc>${baseUrl}/${article._id}</loc>
        <lastmod>${
        article.createdAt
            ? new Date(article.createdAt).toISOString()
            : new Date().toISOString()
        }</lastmod>
    </url>
    `).join('');


  // توليد الـ sitemap كامل
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    ${articleUrls}
  </urlset>`;

  // تعيين هيدر المحتوى وإرسال XML
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
