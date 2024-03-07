import { getArticle, getAllArticles } from "@/lib/api";

export async function generateStaticParams() {
  const allArticles = await getAllArticles();

  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function KnowledgeArticle({
  params,
}) {
  const article = await getArticle(params.slug);
  return (
    <main>
      <h1>Article Detail Page</h1>
      <div>{article.title}</div>
    </main>
  );
}
