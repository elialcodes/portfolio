export type Page = {
  name: string;
  href: string;
};

export type Picture = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
};

export type ProjectCard = {
  title: string;
  src: string;
  alt: string;
  description: string;
  linkVercel: string;
  linkGitHub: string;
};

export type Icon = {
  logo: string;
  name: string;
};

export const links: Page[] = [
  { name: 'Sobre mí', href: '/dashboard/about-me' },
  { name: 'Proyectos', href: '/dashboard/projects' },
  { name: 'Contacto', href: '/dashboard/contact' },
];

export const pictures: Picture[] = [
  {
    src: '/carousel/feet.jpg',
    alt: 'feet',
    width: 230,
    height: 150,
    className: 'image-carousel',
  },
  {
    src: '/carousel/beach.jpg',
    alt: 'beach',
    width: 230,
    height: 150,
    className: 'image-carousel',
  },
  {
    src: '/carousel/code.jpg',
    alt: 'code',
    width: 230,
    height: 150,
    className: 'image-carousel',
  },
  {
    src: '/carousel/reading.jpg',
    alt: 'reading',
    width: 230,
    height: 150,
    className: 'image-carousel',
  },
  {
    src: '/carousel/coffee.jpg',
    alt: 'coffe',
    width: 230,
    height: 150,
    className: 'image-carousel',
  },
  {
    src: '/carousel/plants.jpg',
    alt: 'plants',
    width: 230,
    height: 150,
    className: 'image-carousel',
  },
];

export const projects: ProjectCard[] = [
  {
    title: 'E-commerce',
    src: '/projects/my-ecommerce.png',
    alt: 'proyecto Mi e-commerce',
    description: 'Tienda on-line',
    linkVercel: 'https://my-ecommerce-inky.vercel.app/',
    linkGitHub: 'https://github.com/elialcodes/shopping-cart',
  },
  {
    title: 'Tres en raya',
    src: '/projects/tic-tac-toe-game.png',
    alt: 'proyecto Tres en raya',
    description: 'Juego del tres en raya',
    linkVercel: 'https://tic-tac-toe-game-smoky-beta.vercel.app/',
    linkGitHub: 'https://github.com/elialcodes/tic-tac-toe-Game',
  },
  {
    title: 'To do list',
    src: '/projects/to-do-app.png',
    alt: 'proyecto Tareas por hacer',
    description: 'Agenda con tareas por hacer',
    linkVercel: 'https://to-do-list-nine-flax-32.vercel.app/',
    linkGitHub: 'https://github.com/elialcodes/to-do-list',
  },
  {
    title: 'Traductor',
    src: '/projects/translator.png',
    alt: 'proyecto Traductor',
    description: 'Traductor de 6 idiomas',
    linkVercel: 'https://translator-nu-jade.vercel.app',
    linkGitHub: 'https://github.com/elialcodes/translator',
  },
];

export const icons: Icon[] = [
  { logo: '/icons/html5.svg', name: 'HTML 5' },
  { logo: '/icons/css.svg', name: 'CSS 3' },
  { logo: '/icons/sass.svg', name: 'Sass' },
  { logo: '/icons/javascript.svg', name: 'JavaScript' },
  { logo: '/icons/typescript.svg', name: 'TypeScript' },
  { logo: '/icons/react.svg', name: 'React' },
  { logo: '/icons/nextjs_icon_dark.svg', name: 'Next.js' },
  { logo: '/icons/mysql.svg', name: 'MySQL' },
  { logo: '/icons/mongodb.svg', name: 'Mongo DB' },
  { logo: '/icons/nodejs.svg', name: 'Node.js' },
  { logo: '/icons/vitejs.svg', name: 'Vite.js' },
  { logo: '/icons/vercel_light.svg', name: 'Vercel' },
  { logo: '/icons/git.svg', name: 'Git' },
  { logo: '/icons/github_light.svg', name: 'GitHub' },
];
