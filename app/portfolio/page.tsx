import ProjectCard from "../ui/portfolio/ProjectCard";
import { projects } from "../lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Thomas Paysac",
};

export default function Page () {
  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col p-4 py-10 md:px-24 md:py-12 gap-8 text-white">
      <h1 className="text-4xl tracking-wide font-semibold">Portfolio</h1>
      <div className="flex flex-col gap-20 md:gap-0">
        {
          projects.map((el, i) => {
            const parity = i % 2;
            return (
              <ProjectCard key={el.id} odd={!!parity} id={el.id} nom={el.nom} description={el.description_courte} url={el.url} screenshots={el.screenshots} />
            )
          })
        }
      </div>
    </div>
  )
}