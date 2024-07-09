import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTaskComponent } from './view-task/view-task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path:"",component:ViewTaskComponent
  },{
    path:"viewTask",component:ViewTaskComponent
  },{
    path:"createTask",component:CreateTaskComponent
  },{
    path:"updateTask/:id",component:UpdateTaskComponent
  },{
    path:"**",component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
