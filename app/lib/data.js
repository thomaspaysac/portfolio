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
    source: "icons/express.png",
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
    description: "C'est Textera",
    url: "https://textera.netlify.app/",
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