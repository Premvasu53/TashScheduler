import { Component } from '@angular/core';
import { Template } from '../template';
import { TaskManagementService } from '../task-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  taskdetails=new Template("","","");
  constructor(public serv:TaskManagementService,public rt:Router){}
  save(){
    this.serv.addTask(this.taskdetails).subscribe(()=>{
      this.rt.navigate(["/viewTask"]);
    });
  }
}
