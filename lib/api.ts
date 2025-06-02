


export async function fetchAllArticles() {
  const res = await fetch("https://fitness-magazine-backend-myportfolio.up.railway.app/api/articles");
  if (!res.ok) throw new Error("Failed to fetch articles");
  return res.json();
}

export async function fetchArticleById(id: string) {
  const res = await fetch(`https://fitness-magazine-backend-myportfolio.up.railway.app/api/articles/${id}`);
  if (!res.ok) throw new Error("Failed to fetch article");
  return res.json();
}



// مثال: جلب مقالات من نفس التصنيف، باستثناء المقال الحالي
export async function fetchRelatedArticles(category: string, currentId: string) {
  const res = await fetch(`https://fitness-magazine-backend-myportfolio.up.railway.app/api/articles/category/${category}`);
  const all = await res.json();

  // استبعاد المقال الحالي واختيار 4 عشوائيًا
  const filtered = all.filter((a: any) => a._id !== currentId);
  const shuffled = filtered.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4);
}
