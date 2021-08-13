import bash from '../assets/bash.svg';
import css3 from '../assets/css3.png';
import heroku from '../assets/heroku.png';
import html5 from '../assets/html5.png';
import javascript from '../assets/javascript.png';
import jenkins from '../assets/jenkins.png';
import jira from '../assets/jira.png';
import mysql from '../assets/mysql.svg';
import mongo from '../assets/mongo.png';
import python from '../assets/python.png';
import react from '../assets/react.png';
import rhel from '../assets/rhel.png';
import tomcat from '../assets/tomcat.png';
import firebase from '../assets/firebase.png';

interface logoShape {
    src: string;
    alt: string;
    invert: boolean;
}   

export const logosDict: Record<string, logoShape> = {
  'html': {
      src: html5,
      alt: 'HTML5',
      invert: true
  },
  'css': {
      src: css3,
      alt: "CSS3",
      invert: true
  },
  'javascript': {
      src: javascript,
      alt: "JavaScript",
      invert: false
  },
  'react': {
      src: react,
      alt: "React",
      invert: false
  },
  'mongo': {
      src: mongo,
      alt: "MongoDB",
      invert: true
  },
  'firebase': {
      src: firebase,
      alt: "Firebase",
      invert: false
  },
  'mysql': {
      src: mysql,
      alt: "MySQL",
      invert: false
  },
  'python': {
      src: python,
      alt: "Python",
      invert: false
  },
  'heroku': {
      src: heroku,
      alt: "Heroku",
      invert: true
  },
  'jenkins': {
      src: jenkins,
      alt: "Jenkins",
      invert: false
  },
  'jira': {
      src: jira,
      alt: "Jira",
      invert: true
  },
  'rhel': {
      src: rhel,
      alt: "Red Hat Enterprise Linux",
      invert: true
  },
  'tomcat': {
      src: tomcat,
      alt: "Tomcat",
      invert: true
  },
  'bash': {
      src: bash,
      alt: "Bash",
      invert: true
  }
}