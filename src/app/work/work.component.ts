import { Component, OnInit } from '@angular/core';
import {Project} from './project';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  projects: Project[] = [
    {number: 0,
      name: 'Flexbox-template',
      displayname: 'FLEXBOX-TEMPLATE',
      tagline: 'Example of using FLEX',
      summary: 'Flexbox-template shoving how we can using Flex for simple projects',
      description: 'The Flexible Box Module, usually referred to as flexbox, was designed as a one-dimensional layout ' +
        'model, and as a method that could offer space distribution between items in an interface and powerful ' +
        'alignment capabilities.',
      technologies: ['HTML', 'JavaScript', 'Gulp'],
      urls: 'https://alexaandrievskaya.github.io/flexbox-template/',
      color: 'rgba(37,155,205, .75)',
      cover: 'images/projects/flexbox-template.png',
      box: 'images/projects/flexbox-template.png',
      header: 'images/projects/flexbox-template.png'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
