import { Metadata, ResolvingMetadata } from "next";
import { getAllArticles, getArticle } from "@/app/lib/contentful_api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { redirect } from "next/navigation";
import { draftMode } from "next/headers";
import Image from "next/image";


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
      card: 'summary',
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
      <div className="inline-block rounded-2xl break-all bg-zinc-100 px-3 py-1 text-sm font-semibold text-zinc-800">
        {article.category}
      </div>
      <h2 className="text-6xl font-bold tracking-wide my-4">
        {article.title}
      </h2>
      <p className="mb-6 italic">Published {article.date}</p>
      <p className="post-summary mb-2 break-all">{article.summary}</p>
      <Image src={article.articleImage.url} height={1000} width={1000} alt={"article image"} className="aspect-[16/9] object-cover w-full rounded-lg my-8" />
      <div className="blog-post_content">
        {documentToReactComponents(article.details.json)}
      </div>
    </div>
  );
}
