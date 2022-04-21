import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

// App-Level
export interface IPageContext {
  [index: number]: string | boolean | React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<boolean>>;
}
export interface INavContext {
  [index: number]: string | boolean | React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<boolean>>;
}

// Components
export interface ActionButtonProps {
  link: string;
  navigation?: string;
}
export interface FlipCardProps {
  icon: IconDefinition;
  title: string;
  description: string; 
}
export interface LogoSliderProps {
  logos: string[]
}
export interface NavBarLinkProps {
  to: string;
  active: string;
}
export interface ProjectProps {
  title: string;
  description: string;
  gif: string;
  key: number;
  link: string;
  stack: Array<string>;
  time: string;
  type: string;
}
export interface LogoShape {
  src: string;
  alt: string;
  invert: boolean;
}   
export interface TypedIconMapping {
  home: IconDefinition;
  aboutme: IconDefinition;
  projects: IconDefinition;
  articles: IconDefinition;
  [key: string]: IconDefinition;
}
export interface TypedTechStackIcons {
  react: string;
  nodeJS: string;
  mongo: string;
  sass: string;
  firebase: string;
  bootstrap: string;
  nextjs: string;
  typescript: string;
  solidity: string;
  tailwindCSS: string;
  [key: string]: string;
}

// API Types
export interface ArticlesProps {
  articles: Array<ArticleType>;
}
export interface ProjectsProps {
  projectsData: ProjectData;
}
export interface IArticle {
  title: string;
  date: string;
  image: string;
  key: string;
  link: string;
}
export interface ArticleType {
  author: string;
  categories: Array<string>;
  content: string;
  description: string;
  enclosure: object;
  guid: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
}
export interface ProjectType {
  [key: string]: string;
}
export interface ProjectData {
  projects: ProjectType;
  projectsMetadata: ProjectType;
}

