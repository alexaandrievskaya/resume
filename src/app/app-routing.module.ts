import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorkComponent} from './work/work.component';
import {SkillsComponent} from './skills/skills.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './core/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'projects', component: WorkComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
