import { getAllArticles, getArticle } from "@/app/lib/contentful_api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { redirect } from "next/navigation";

/*export async function generateStaticParams() {
  let allArticles: any[] = [];
  allArticles = await getAllArticles();
  console.log(allArticles.length);

  return allArticles.map((article: Object) => ({
    slug: article.slug,
    articles: allArticles,
  }));
}*/

export default async function ArticlePage({ params }) {
  const article = await getArticle(params.slug);

  if (!article) {
    redirect('/404');
  }

  return (
    <div className="blog-post min-h-[calc(100vh-80px)] p-4 py-10 md:px-[20vw] md:py-12 gap-10 text-white">
      <h2 className="text-6xl font-bold tracking-wide mb-4">
        {article.title}
      </h2>
      <p className="mb-2">{article.summary}</p>
      <p className="mb-6">Published {article.date}</p>
      <div className="blog-post_content">
        {documentToReactComponents(article.details.json)}
      </div>
    </div>
  );
}
