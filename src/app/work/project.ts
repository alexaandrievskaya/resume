import * as url from 'url';

export interface Project {
  number: number;
  name: string;
  displayname: string;
  tagline: string;
  summary: string;
  description: string;
  // tech: [number[]];
  technologies: string[];
  urls: string;
  color: string;
  cover: string;
  box: string;
  header: string;
  // images: string[];
}
