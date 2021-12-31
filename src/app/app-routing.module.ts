import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent} from  './projects/projects.component';
import { DialogComponent } from './dialog/dialog.component';


const routes: Routes = [
  
  { 
    path: "projects", component: ProjectsComponent
   },{
   path: 'dialog', component: DialogComponent
 }
 ];
 
 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }
 