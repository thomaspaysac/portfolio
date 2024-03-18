import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllArticles } from "../lib/contentful_api";
import { draftMode } from "next/headers";
import TestButton from "../ui/Button";

export const metadata: Metadata = {
  title: "Blog | Thomas Paysac",
};

export default async function Page () {
  const { isEnabled } = draftMode();
  const articles = await getAllArticles(0, isEnabled);

    return (
      <div className="flex min-h-[calc(100svh-80px)] flex-col p-4 py-10 md:px-24 md:py-12 gap-2 text-white">
        <h1 className="text-4xl tracking-wide font-semibold">Blog</h1>
        <div>Cette page est vide {'('}pour le moment{')'}.</div>
        <div className="flex flex-col md:grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {
            articles.map((article: any) => (
              <Link key={article.sys.id} href={`/blog/${article.slug}`}>
              <article  
                className="post-overview h-full flex flex-col rounded-lg shadow-lg overflow-hidden bg-zinc-500/20 transition-all hover:bg-zinc-500/75"
              >
                <Image
                  alt="article image"
                  className="aspect-[4/3] object-cover w-full"
                  height="263"
                  src={article.articleImage? article.articleImage.url : ''}
                  width="350"
                />
                <div className="flex-1 p-6">
                    <h3 className="text-2xl font-semibold tracking-wide py-4">
                      {article.title}
                    </h3>
                  <div className="inline-block rounded-2xl bg-zinc-100 px-3 py-1 text-sm font-semibold text-zinc-800 break-all">
                    {article.category}
                  </div>
                  <p className="max-w-none mt-4 mb-2 text-sm text-ellipsis overflow-hidden">
                    {article.summary}
                  </p>
                  <div className="flex justify-end mt-auto">
                    <div className="inline-flex h-10 items-center justify-center text-sm font-medium">
                      Lire l&apos;article →
                    </div>
                  </div>
                 </div>
                </article>
                </Link>
              )
            )
          }
        </div>
      </div>
    )
};