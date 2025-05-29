// pages/sitemap.xml.ts
import { GetServerSideProps } from 'next';

const Sitemap = () => {
  // هذا الملف لا يتم عرضه مباشرة، لأنه فقط يعيد XML
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://almaarifamagazine.vercel.app/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
