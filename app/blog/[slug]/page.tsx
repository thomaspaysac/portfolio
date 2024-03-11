import { Metadata, ResolvingMetadata } from "next";
import { getAllArticles, getArticle } from "@/app/lib/contentful_api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { redirect } from "next/navigation";
import { draftMode } from "next/headers";


export async function generateMetadata(
  params: Object,
  parent: ResolvingMetadata
): Promise<Metadata> { 
  const article = await getArticle(params.params.slug);
  return {
    title: `${article.title} | Thomas Paysac`,
    description: article.summary,
    openGraph: {
      title: `${article.title} | Thomas Paysac`,
      description: article.summary,
      images: [
        {
          url: article.articleImage.url,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | Thomas Paysac`,
      description: article.summary,
      siteId: '1767197636539392000',
      creator: '@tommyBlablaXrd',
      creatorId: '1767197636539392000',
      images: [article.articleImage.url], // Must be an absolute URL
    },  
  }
}

export async function generateStaticParams() {
  const allArticles = await getAllArticles();

  return allArticles.map((article: Object) => ({
    slug: article.slug,
    articles: allArticles,
  }));
}

export default async function ArticlePage({ params }) {
  const { isEnabled } = draftMode();
  const article = await getArticle(params.slug, isEnabled);

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
