'use client';

import { projects } from "@/app/lib/data";
import { redirect, useParams } from "next/navigation";
import { Redirect } from "next";

export default function Page () {
  const params = useParams();
  const projet = projects.find(el => el.id === params.projet);

  if (projet) {
    return (
      <div className="flex min-h-screen flex-col p-2 md:px-24 md:py-12 gap-10 text-white">
        <h1 className="text-4xl font-semibold text-center">{projet.nom}</h1>
      </div>
    )
  } else {
    redirect('/404');
  }

}