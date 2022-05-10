import { ApolloError } from '@apollo/client';
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
export interface ProjectGQL {
  description: string;
  gif: string;
  hours: number | null;
  id: number;
  link: string;
  techStack: Array<TechStack>;
  title: string;
  type: string;
  __typename: string;
}
export interface TechStack {
  __typename: string;
  name: string
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
  projectsData: Array<ProjectGQL>;
  loading: boolean;
  error: ApolloError | undefined;
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

