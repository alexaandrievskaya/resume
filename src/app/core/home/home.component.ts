import { Component, OnInit } from '@angular/core';
import {Name} from './name';
import {FIRSTNAME, LASTNAME} from './mock-name';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  random1: Name;
  random2: Name;


  constructor() { }

  ngOnInit(): void {
  }

  nameRhymer(): void {
    this.random1 = FIRSTNAME[Math.floor(Math.random() * FIRSTNAME.length)];
    this.random2 = LASTNAME[Math.floor(Math.random() * LASTNAME.length)];
  }


}
