import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main-component/home/home.component';
import {OpinionComponent } from './main-component/Opinion/opinion.component';
import { NotfoundComponent } from './main-component/notfound/notfound.component';
import { NewsComponent } from './main-component/News/news.component';
import { BusinessComponent } from './main-component/Business/business.component';
import { EnergyComponent } from './main-component/Energy/energy.component';
import { NewsShowingComponent } from './sub-component/news-showing/news-showing.component';




const routes: Routes = [
  {path:"" , redirectTo: "/home", pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"news",component:NewsComponent},
  {path:"business",component:BusinessComponent},
  {path:"energy",component:EnergyComponent},
  {path:"opinion",component:OpinionComponent},
  {path:"newsshowing/:id",component:NewsShowingComponent},
  { path: '**', component:NotfoundComponent  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
