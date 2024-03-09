import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllArticles } from "../lib/contentful_api";
//import { getAllArticles } from "@/lib/api";

export const metadata: Metadata = {
  title: "Blog | Thomas Paysac",
};

export default async function Page () {
  const articles = await getAllArticles();

  return (
    <div className="flex min-h-[calc(100svh-80px)] flex-col p-4 py-10 md:px-24 md:py-12 gap-2 text-white">
      <h1 className="text-4xl tracking-wide font-semibold">Blog</h1>
      <div>Cette page est vide {'('}pour le moment{')'}.</div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article: any) => (
                  <article key={article.sys.id} className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <Image
                      alt="placeholder"
                      className="aspect-[4/3] object-cover w-full"
                      height="263"
                      src={article.articleImage? article.articleImage.url : ''}
                      width="350"
                    />
                    <div className="flex-1 p-6">
                      <Link href={`/blog/${article.slug}`}>
                        <h3 className="text-2xl font-bold leading-tight text-zinc-900 dark:text-zinc-50  py-4">
                          {article.title}
                        </h3>
                      </Link>
                      <div className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-sm font-semibold text-zinc-800">
                        {article.category}
                      </div>
                      <p className="max-w-none text-zinc-500 mt-4 mb-2 text-sm dark:text-zinc-400">
                        {article.summary}
                      </p>
                      <div className="flex justify-end">
                        <Link
                          className="inline-flex h-10 items-center justify-center text-sm font-medium"
                          href={`/blog/${article.slug}`}
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </article>
              ))}
            </div>
    </div>
  )
};