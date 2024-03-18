const techs_frontend = [
  {
    id: "js",
    source: "/icons/js.png",
    caption: "JavaScript"
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
    description_courte: "Application web progressive de messagerie permettant des conversations privées et en groupe.",
    description_longue: "Application web progressive de messagerie, offrant des conversation privées entre les utilisateurs et des conversations de groupe.",
    objectif: ["La demande était de créer une application similaire à WhatsApp avec authentification sécurisée des utilisateurs, échange de messages avec un autre utilisateur, et personnalisation du profil utilisateur."],
    resultat: ["Aux fonctionnalités minimales ont été ajoutées les conversations de groupe et l'envoi d'images. Un compte visiteur a été établi afin de pouvoir proposer une démonstration du site. Concernant l'interface, l'application a été pensée « mobile-first » avec un visuel se rapprochant volontairement de WhatsApp.", "Afin de me familiariser avec différents services durant cet exercices, le backend utilise Supabase pour l'authentification des utilisateurs, MongoDB pour la base de données, et Firebase Storage pour le stockage des fichiers image. L'API permettant de communiquer avec ces services a été créée avec Express.", "Le site a par la suite été converti en application web progressive, permettant de bénéficier d'une interface plus naturelle sur téléphone."],
    frontend: techs_frontend.filter(el => el.id === "react" || el.id === "html" || el.id === "css"),
    backend: techs_backend.filter(el => el.id === "express" || el.id === "mongodb" || el.id === "firebase" || el.id === "supabase"),
    url: "https://textera.netlify.app/",
    repo: "https://github.com/thomaspaysac/textera",
    screenshots: [
      "/screens/textera/1.png",
      "/screens/textera/2_mobile.jpg",
      "/screens/textera/3_mobile.jpg",
      "/screens/textera/4_mobile.jpg",
      "/screens/textera/5_mobile.jpg",
    ]
  },
  {
    id: "talkbook",
    nom: "Talkbook",
    description_courte: "Site de réseau social inspiré de Facebook.",
    description_longue: "Un exemple de réseau social basique, permettant d'échanger du contenu avec les autres utilisateurs et de créer une liste d'amis.",
    objectif: ["La demande était de créer un site similaire à Facebook, avec : inscription obligatoire pour accéder au site, création d'un profil utilisateur, envoi de requêtes d'amitié à d'autres utilisateurs, création de posts textuels, affichage de tous les posts des amis sur une page index, possibilité de « liker » et de commenter chaque post, et une page de recensement de tous les utilisateurs inscrits."],
    resultat: ["Aux fonctionnalités minimales ont été ajoutées l'édition de la photo de profil utilisateur, l'ajout d'une photo supplémentaire en fond de profil, la possibilité d'ajouter un fichier image aux posts, la possibilité de réinitialisation du mot de passe utilisateur, le choix entre plusieurs thèmes de couleurs, ainsi qu'une localisation du site en anglais et en français. Un compte visiteur a été établi afin de pouvoir proposer une démonstration du site.", "L'interface se base volontairement sur celle de Facebook, et est responsive afin de proposer la meilleure expérience possible sur ordinateur comme sur téléphone.", "Mon objectif personnel a été d'utiliser uniquement Supabase pour gérer les différents services du site afin de gagner en expertise avec un système open-source et me familiariser avec l'administration d'une base de données PostgreSQL."],
    frontend: techs_frontend.filter(el => el.id === "react" || el.id === "html" || el.id === "css"),
    backend: techs_backend.filter(el => el.id === "express" || el.id === "supabase"),
    url: "https://talkbook-app.netlify.app/",
    repo: "https://github.com/thomaspaysac/freebook",
    screenshots: [
      "/screens/talkbook/1.png",
      "/screens/talkbook/2.png",
      "/screens/talkbook/3_mobile.png",
      "/screens/talkbook/4_mobile.png"
    ]
  },
  {
    id: "eys",
    nom: "Evaluate Your Sounds",
    description_courte: "Recréation du site Rate Your Music, réseau social musical.",
    description_longue: "Recréation des fonctionnalités principales du site RateYourMusic, proposant les fonctionnalités principales d'un réseau social.",
    objectif: ["Ce projet a été réalisé à des fins d'entraînement dans le but de développer mes compétences en React. Le site créé devait reproduire au plus proche un site déjà existant et proposant toutes les fonctionnalités CRUD (Create, Read, Update, Delete)."],
    resultat: ["Les fonctionnalités majeures du site d'origine sont présentes, à savoir la création d'un compte utilisateur, la recherce et consultation d'informations sur des artistes et des albums, la création puis l'édition par les utilisateurs des pages albums, la possibilité d'écrire des critiques et d'attribuer des notes, et d'ajouter les albums à sa collection personnelle (possédé, liste de souhait) consultable sur le profil utilisateur.", "Des fonctionnalités sociales ont également été reproduites, il est possible d'envoyer des messages sur la page de profil des autres utilisateurs, de consulter leur collection, de les ajouter en tant qu'ami afin de pouvoir plus facilement les retrouver et mettre plus en valeur les notes qu'ils ont attribuées.", "L'authentification et la base de données se font à travers Firebase."],
    frontend: techs_frontend.filter(el => el.id === "react" || el.id === "html" || el.id === "css"),
    backend: techs_backend.filter(el => el.id === "firebase"),
    url: "https://rym-clone.web.app/",
    repo: "https://github.com/thomaspaysac/rateeverything",
    screenshots: [
      "/screens/eys/1.png",
      "/screens/eys/2.png",
      "/screens/eys/3.png",
      "/screens/eys/4.png",
      "/screens/eys/5.png",
    ]
  },
  {
    id: "toodoo",
    nom: "Toodoo",
    description_courte: "Application web de liste de tâches.",
    description_longue: "Application web de liste de tâches permettant de créer et regrouper des tâches en listes personnalisables et de les trier selon plusieurs critères.",
    objectif: ["La demande était de développer un site permettant de créer des tâches en leur attribuant un titre, une description, une échéance et un degré de priorité, avec possibilité de modifier ces informations ultérieurement."],
    resultat: ["Une fonctionnalité supplémentaire de tri de toutes les tâches selon leur échéance a été ajoutée (toutes les tâches à terminer dans la semaine, dans le mois, ...). Les listes de tâches peuvent être personnalisées en leur ajoutant une description et en leur assignant une couleur d'identification.", "L'utilisateur doit se connecter grâce à un compte Google pour pouvoir utiliser le service. L'authentification et la gestion de la base de données se font à travers Firebase."],
    frontend: techs_frontend.filter(el => el.id === "js" || el.id === "html" || el.id === "css"),
    backend: techs_backend.filter(el => el.id === "firebase"),
    url: "https://toodoo-81e7d.web.app/",
    repo: "https://github.com/thomaspaysac/todo-app",
    screenshots: [
      "/screens/toodoo/1.png",
      "/screens/toodoo/2.png",
      "/screens/toodoo/3.png",
    ]
  },
  {
    id: "webpalettes",
    nom: "WebPalettes",
    description_courte: "Application web de création de palettes de couleurs orientées web design.",
    description_longue: "Application web de création de palettes orientées web design, proposant à partir d'une couleur de base des couleurs d'accentuation ainsi que de palettes de gris et de messages d'erreurs.",
    objectif: ["C'est un projet personnel qui avait pour but de me simplifier le travail de choix de palettes de couleurs, en proposant automatiquement des couleurs essentielles à l'interface (nuances de gris et de messages d'erreurs)."],
    resultat: ["A partir de la couleur choisie par l'utilisateur, le site génère quatre palettes de base : une palette de nuances pour cette couleur, une palette de nuances pour les gris teintés de la couleur de base, une palette de gris neutres, et une palette de rouge pour les messages d'erreurs.", "L'utilisateur peut également sélectionner une des diverses options permettant de générer des palettes de couleurs complémentaires selon le modèle choisi (complémentaires, analogues, triadiques, ...)."],
    frontend: techs_frontend.filter(el => el.id === "react" || el.id === "html" || el.id === "css"),
    url: "https://webpalettes.netlify.app/",
    repo: "https://github.com/thomaspaysac/palettes",
    screenshots: [
      "/screens/webpalettes/1.png",
      "/screens/webpalettes/2.png",
      "/screens/webpalettes/3.png",
    ]
  },
];

module.exports = {
  techs_frontend,
  techs_backend,
  social_links,
  projects
}