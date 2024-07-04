import { Injectable } from '@angular/core';
import { Template } from './template';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {
  constructor(public hc:HttpClient) {}
  url="http://localhost:3000/tasks";
  addTask(taskdetails:Template){
    return this.hc.post(this.url,JSON.stringify(taskdetails));
  }
  viewAllTask(){
    return this.hc.get<Template[]>(this.url);
  }
  deleteTask(id:any){
    return this.hc.delete(this.url+"/"+id);
  }
  taskselectById(id:any){
    return this.hc.get<Template>(this.url+"/"+id);
  }
  taskupdate(task:Template){
    return this.hc.put(this.url+"/"+task.id,JSON.stringify(task));
  }
}
