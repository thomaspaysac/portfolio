const techs_frontend = [
  {
    id: "js",
    source: "/icons/js.png",
    caption: "Javascript"
  },
  {
    id: "react",
    source: "/icons/react.png",
    caption: "React"
  },
  {
    id: "html",
    source: "/icons/html.png",
    caption: "HTML 5"
  },
  {
    id: "css",
    source: "/icons/css.png",
    caption: "CSS 3"
  },
  {
    id: "tailwind",
    source: "/icons/tailwind.png",
    caption: "Tailwind"
  }
];

const techs_backend = [
  {
    id: "node",
    source: "/icons/node.png",
    caption: "Node.js"
  },
  {
    id: "express",
    source: "/icons/express.png",
    caption: "Express"
  },
  {
    id: "next",
    source: "/icons/next.png",
    caption: "Next.js"
  },
  {
    id: "mongodb",
    source: "/icons/mongodb.png",
    caption: "MongoDB"
  },
  {
    id: "firebase",
    source: "/icons/firebase.png",
    caption: "Firebase",
  },
  {
    id: "supabase",
    source: "/icons/supabase.png",
    caption: "Supabase"
  }
];

const social_links = [
  {
    id: "linkedin",
    nom: "LinkedIn",
    url: "https://www.linkedin.com/in/thomas-paysac-5a2713254/",
    image: "/icons/linkedin.png",
  },
  {
    id: "github",
    nom: "GitHub",
    url: "https://github.com/thomaspaysac",
    image: "/icons/github-mark-white.svg"
  }
];

const projects = [
  {
    id: "textera",
    nom: "Textera",
    description_courte: "Application web de messagerie",
    description_longue: "Application web progressive de messagerie, offrant des conversation privées entre les utilisateurs et des conversations de groupe.",
    objectif: ["La demande était de créer une application similaire à WhatsApp avec authentification sécurisée des utilisateurs, échange de messages avec un autre utilisateur, et personnalisation du profil utilisateur."],
    resultat: ["Aux fonctionnalités minimum ont été ajoutées les conversations de groupe et l'envoi d'images. Concernant l'interface, l'application a été pensée « mobile-first » avec un visuel se rapprochant volontairement de WhatsApp.", "Afin de me familiariser avec différents services durant cet exercices, le backend utilise Supabase pour l'authentification des utilisateurs, MongoDB pour la base de données, et Firebase Storage pour le stockage des fichiers image. L'API permettant de communiquer avec ces services a été créée avec Express.", "Le site a par la suite été converti en application web progressive, permettant de bénéficier d'une interface plus naturelle sur téléphone."],
    frontend: techs_frontend.filter(el => el.id === "react" || el.id === "html" || el.id === "css"),
    backend: techs_backend.filter(el => el.id === "express" || el.id === "mongodb" || el.id === "firebase" || el.id === "supabase"),
    url: "https://textera.netlify.app/",
    repo: "https://github.com/thomaspaysac/textera",
    screenshots: [
      "/screens/textera/1.png",
      "/screens/textera/2.jpg",
      "/screens/textera/3.jpg",
      "/screens/textera/4.jpg",
      "/screens/textera/5.jpg",
    ]
  },
  {
    id: "talkbook",
    nom: "Talkbook",
    description: "Réseau social",
    description_courte: "",
    description_longue: "",
    objectif: [],
    resultat: [],
    frontend: [],
    backend: [],
    url: "https://talkbook-app.netlify.app/",
    screenshots: [
      "/screens/talkbook/1.png",
      "/screens/talkbook/2.png",
      "/screens/talkbook/3.png",
      "/screens/talkbook/4.png"
    ]
  }
];

module.exports = {
  techs_frontend,
  techs_backend,
  social_links,
  projects
}