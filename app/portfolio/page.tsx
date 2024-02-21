import ProjectCard from "../ui/portfolio/ProjectCard";
import { projects } from "../lib/data";

export default function Page () {
  return (
    <div className="flex min-h-screen flex-col p-2 md:px-24 md:py-12 gap-10 text-white">
      <h1 className="text-4xl">Portfolio</h1>
      {
        projects.map((el) => {
          return (
            <ProjectCard key={el.id} nom={el.nom} description={el.description} url={el.url} screenshots={el.screenshots} />
          )
        })
      }
    </div>
  )
}