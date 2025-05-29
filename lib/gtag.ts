// lib/gtag.ts
export const GA_MEASUREMENT_ID = 'G-DL40NN5MDP'; // ضع ID الخاص بك هنا

// إرسال صفحة مشاهدة
export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
