import { Component } from '@angular/core';
import { Template } from '../template';
import { TaskManagementService } from '../task-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent {
  Arr:Template[]=[];
  constructor(public sv:TaskManagementService,public rt:Router){
    this.sv.viewAllTask().subscribe((ts:any)=>{
      this.Arr=ts;
    });
  }
  deleteTask(id:any){
    this.sv.deleteTask(id).subscribe(()=>{
      location.reload();
    });
  }
  togsec(){
    let maincnt=document.getElementById('maincnt');
    let abtcnt=document.getElementById('abtcnt');
    let togbtn=document.getElementById('togbtn');
    maincnt?.classList.toggle('hide');
    abtcnt?.classList.toggle('show');
    togbtn?.classList.toggle('hide');
  }
}
