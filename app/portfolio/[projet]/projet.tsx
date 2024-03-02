'use client';

import { projects } from "@/app/lib/data";
import Card from "@/app/ui/techs/Card";
import { redirect, useParams } from "next/navigation";
import Image from "next/image";

export default function Projet () {
  const params = useParams();
  const projet = projects.find(el => el.id === params.projet);

  if (projet) {
    return (
      <div className="flex min-h-[calc(100vh-80px)] flex-col p-4 py-10 md:px-64 md:py-12 gap-8 text-white text-lg">
        <h1 className="text-4xl font-semibold tracking-wide text-center">{projet.nom}</h1>
        <div>
          <p>{projet.description_longue}</p>
        </div>
        <div className="self-center flex items-center gap-8">
          <a href={projet.url} target="_blank">
            <button className="text-xl flex items-center gap-2 bg-emerald-500 px-4 py-2 rounded mb-6 shadow transition-all hover:bg-emerald-600">
              <Image src="/icons/external-link.png" height={16} width={16} alt="" unoptimized={true} />
              Visiter le site
            </button>
          </a>
          <a href={projet.repo} target="_blank">
            <button className="text-base flex items-center gap-2 bg-slate-500/50 p-2 shadow rounded mb-6 transition-all hover:bg-slate-600/50">
              <Image src="/icons/code.png" height={16} width={16} alt="" unoptimized={true} />
              Voir le code
            </button>
          </a>
        </div>
        <div className="mb-6">
          <h3 className="text-3xl mb-2">L&apos;objectif</h3>
          <div className="w-full h-0.5 rounded bg-indigo-500/75 mb-4 shadow-lg"></div>
          {
            projet.objectif.map((el, i) => {
              return (
                <p key={`objectif-${i}`} className="text-base leading-relaxed md:text-lg mb-2">{el}</p>
              )
            })
          }
        </div>
        <div className="mb-6">
          <h3 className="text-3xl mb-2">Le résultat</h3>
          <div className="w-full h-0.5 rounded bg-indigo-500/75 mb-4 shadow-lg"></div>
          {
            projet.resultat.map((el, i) => {
              return (
                <p key={`resultat-${i}`} className="text-base leading-relaxed md:text-lg mb-2">{el}</p>
              )
            })
          }
        </div>
        <div className="mb-6">
          <h3 className="text-3xl mb-2">Technologies</h3>
          <div className="w-full h-0.5 rounded bg-indigo-500/75 mb-4 shadow-lg"></div>
          <div className="tech_stacks flex flex-col md:flex-row gap-10">
            <div className="tech-card backdrop-blur p-4 rounded-lg shadow-lg w-fit">
              <h3 className="mb-3"><code>Frontend{'>'}</code></h3>
              <div className="flex flex-wrap row-span-2 gap-4">
                {
                  projet.frontend.map((tech) => {
                    return <Card key={tech.id} source={tech.source} caption={tech.caption} />
                  })
                }
              </div>
            </div>
            <div className="tech-card backdrop-blur p-4 rounded-lg shadow-lg w-fit">
              <h3 className="mb-3"><code>Backend{'>'}</code></h3>
              <div className="flex flex-wrap row-span-2 gap-4">
                {
                  projet.backend.map((tech) => {
                    return <Card key={tech.id} source={tech.source} caption={tech.caption} />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    redirect('/404');
  }

}