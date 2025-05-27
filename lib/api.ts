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
