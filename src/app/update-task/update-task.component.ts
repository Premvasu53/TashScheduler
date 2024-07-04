import { Component } from '@angular/core';
import { Template } from '../template';
import { TaskManagementService } from '../task-management.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent {
  id:any="";
  task=new Template("","","");
  constructor(public sv:TaskManagementService,public ac:ActivatedRoute,public rt:Router){
    this.id=this.ac.snapshot.params["id"];
    this.sv.taskselectById(this.id).subscribe((td:any)=>{
      this.task=td;
    })
  }
  taskupdate(){
    this.sv.taskupdate(this.task).subscribe();
    this.rt.navigate(["/viewTask"]);
  }
}
